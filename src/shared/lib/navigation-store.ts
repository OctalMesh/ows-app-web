"use client";

import { create } from "zustand";

interface NavigationState {
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  isCartOpen: boolean;
  cartItemsCount: number;
}

interface NavigationActions {
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  closeAll: () => void;
  setCartItemsCount: (count: number) => void;
  incrementCartItemsCount: (by?: number) => void;
  decrementCartItemsCount: (by?: number) => void;
}

type NavigationStore = NavigationState & NavigationActions;

const initialState: NavigationState = {
  isMenuOpen: false,
  isSearchOpen: false,
  isCartOpen: false,
  cartItemsCount: 3,
};

export const useNavigationStore = create<NavigationStore>()((set, get) => ({
  ...initialState,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
  toggleMenu: () => {
    const { isMenuOpen } = get();

    set({ isMenuOpen: !isMenuOpen });
  },
  openSearch: () => set({ isSearchOpen: true, isCartOpen: false }),
  closeSearch: () => set({ isSearchOpen: false }),
  toggleSearch: () => {
    const { isSearchOpen } = get();

    set({ isSearchOpen: !isSearchOpen, isCartOpen: false });
  },
  openCart: () => set({ isCartOpen: true, isSearchOpen: false }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => {
    const { isCartOpen } = get();

    set({ isCartOpen: !isCartOpen, isSearchOpen: false });
  },
  closeAll: () =>
    set({ isMenuOpen: false, isSearchOpen: false, isCartOpen: false }),
  setCartItemsCount: (count) =>
    set({ cartItemsCount: Math.max(0, Math.floor(count)) }),
  incrementCartItemsCount: (by = 1) =>
    set(({ cartItemsCount }) => ({
      cartItemsCount: cartItemsCount + Math.max(1, Math.floor(by)),
    })),
  decrementCartItemsCount: (by = 1) =>
    set(({ cartItemsCount }) => ({
      cartItemsCount: Math.max(0, cartItemsCount - Math.max(1, Math.floor(by))),
    })),
}));

let scrollLockInitialized = false;

function syncBodyScrollLock() {
  if (typeof document === "undefined") {
    return;
  }

  const { isMenuOpen, isSearchOpen, isCartOpen } =
    useNavigationStore.getState();
  const isLocked = isMenuOpen || isSearchOpen || isCartOpen;
  const root = document.documentElement;
  const body = document.body;

  root.style.overflow = isLocked ? "hidden" : "";
  body.style.overflow = isLocked ? "hidden" : "";
}

function ensureScrollLockSubscription() {
  if (scrollLockInitialized || typeof window === "undefined") {
    return;
  }

  scrollLockInitialized = true;
  syncBodyScrollLock();

  useNavigationStore.subscribe(syncBodyScrollLock);
}

ensureScrollLockSubscription();
