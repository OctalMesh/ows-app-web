import { create } from "zustand";

export interface CartStore {
  itemsCount: number;
  setItemsCount: (count: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  itemsCount: 0,
  setItemsCount: (count) => set({ itemsCount: count }),
}));
