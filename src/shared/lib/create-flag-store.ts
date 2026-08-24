import { StoreApi, UseBoundStore, create } from "zustand";

export interface FlagStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function createFlagStore(
  initial = false,
): UseBoundStore<StoreApi<FlagStore>> {
  return create<FlagStore>((set, get) => ({
    isOpen: initial,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    toggle: () => set({ isOpen: !get().isOpen }),
  }));
}
