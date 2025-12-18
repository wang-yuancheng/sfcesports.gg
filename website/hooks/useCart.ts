import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  priceId: string; // Stripe Price ID
  type: 'membership' | 'one-time';
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          // CRITICAL FIX: "One Membership Rule"
          // If adding a membership, it replaces EVERYTHING to prevent "Phantom Totals"
          if (item.type === 'membership') {
            return { items: [item] };
          }
          // If adding a normal item, ensure no membership exists in cart
          const nonMembershipItems = state.items.filter((i) => i.type !== 'membership');
          return { items: [...nonMembershipItems, item] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'shopping-cart',
    }
  )
);