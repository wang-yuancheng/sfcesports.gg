import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  priceId: string; // The Stripe Price ID (e.g., price_123...)
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
          // Rule: Only one membership allowed in cart at a time
          if (item.type === 'membership') {
            const nonMembershipItems = state.items.filter((i) => i.type !== 'membership');
            return { items: [...nonMembershipItems, item] };
          }
          return { items: [...state.items, item] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'shopping-cart', // local storage key
    }
  )
);