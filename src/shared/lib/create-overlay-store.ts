import { create } from "zustand";

export interface OverlayStore<TKey extends string> {
  active: TKey | null;
  isOpen: (key: TKey) => boolean;
  open: (key: TKey) => void;
  close: (key: TKey) => void;
  toggle: (key: TKey) => void;
  closeAll: () => void;
}

export function createOverlayStore<TKey extends string>() {
  return create<OverlayStore<TKey>>((set, get) => ({
    active: null,
    isOpen: (key) => get().active === key,
    open: (key) => set({ active: key }),
    close: (key) =>
      set((state) => (state.active === key ? { active: null } : state)),
    toggle: (key) =>
      set((state) => ({ active: state.active === key ? null : key })),
    closeAll: () => set({ active: null }),
  }));
}
