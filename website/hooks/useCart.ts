import { create } from "zustand";
import { persist } from "zustand/middleware";
import debounce from "lodash.debounce";

export interface CartItem {
  id: string; // Front-end unique ID (often random or matches priceId)
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

  // Async actions
  syncToDb: () => void;
  mergeCart: (userId: string) => Promise<void>;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      // ⚡ DEBOUNCED SYNC
      // Waits 1000ms after the last action before hitting the database
      syncToDb: debounce(async () => {
        const { items } = get();
        // We do a "fire and forget" here, or check auth inside the API.
        // The API route handles the security check (ignoring if guest).
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
            // Membership logic: replace cart
            return { items: [item], isOpen: true };
          }
          const nonMembershipItems = state.items.filter(
            (i) => i.type !== "membership"
          );
          return { items: [...nonMembershipItems, item], isOpen: true };
        });

        // Trigger the debounce
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

      // ⚡ MERGE ACTION
      // Called by useUser when logging in
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
    }),
    {
      name: "shopping-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
