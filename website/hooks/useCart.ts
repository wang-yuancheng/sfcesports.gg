import { create } from "zustand";
import { persist } from "zustand/middleware";
import debounce from "lodash.debounce";

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
  mergeCart: (userId: string) => Promise<void>;
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

      mergeCart: async (userId: string) => {
        const { items } = get();
        try {
          const response = await fetch("/api/cart/merge", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ localItems: items }),
          });

          if (response.ok) {
            const { items: mergedItems } = await response.json();
            set({ items: mergedItems });
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
