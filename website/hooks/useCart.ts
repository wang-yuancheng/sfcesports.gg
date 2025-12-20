import { create } from "zustand";
import { persist } from "zustand/middleware";
import debounce from "lodash.debounce";
import { toast } from "sonner";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  priceId: string;
  type: "membership" | "one-time";
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  setOpen: (open: boolean) => void;
  syncToDb: () => void;
  mergeCart: (
    userId: string,
    options?: { silent?: boolean; pendingItem?: CartItem | null }
  ) => Promise<void>;
  disconnectCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      syncToDb: debounce(async () => {
        const { items } = get();
        try {
          await fetch("/api/cart/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items }),
          });
        } catch (error) {
          console.error("Cart sync failed:", error);
        }
      }, 1000),

      addItem: (item) => {
        const { syncToDb } = get();
        set((state) => {
          if (item.type === "membership") {
            return { items: [item], isOpen: true };
          }
          const nonMembershipItems = state.items.filter(
            (i) => i.type !== "membership"
          );
          return { items: [...nonMembershipItems, item], isOpen: true };
        });
        syncToDb();
      },

      removeItem: (id) => {
        const { syncToDb } = get();
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
        syncToDb();
      },

      clearCart: () => {
        const { syncToDb } = get();
        set({ items: [] });
        syncToDb();
      },

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      setOpen: (open) => set({ isOpen: open }),

      mergeCart: async (userId: string, options) => {
        const { items: currentItems } = get();

        // MERGE LOGIC: Combine existing guest items with the pending item (if any)
        const localItems = [...currentItems];
        if (options?.pendingItem) {
          localItems.push(options.pendingItem);
        }

        try {
          const response = await fetch("/api/cart/merge", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ localItems }),
          });

          if (response.ok) {
            const data = await response.json();
            set({ items: data.items });

            if (options?.silent) return;

            // Case 3: Plan Removed (Already subscribed)
            if (data.planRemoved) {
              toast.info(
                "Removed plan from cart because you are already subscribed to it."
              );
              // We return here to avoid showing "Cart synced" on top of this warning
              return;
            }

            // Decide on Toast based on if we HAD items to sync
            if (localItems.length > 0) {
              if (data.addedToEmpty) {
                // Case 1: DB was empty -> Guest item added
                toast.success("Item added to cart.");
              } else {
                // Case 2: DB had items -> Guest item ignored
                toast.success("Cart synced with your account.");
              }
            }
          }
        } catch (error) {
          console.error("Merge cart error:", error);
        }
      },

      disconnectCart: () => {
        set({ items: [], isOpen: false });
      },
    }),
    {
      name: "shopping-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
