export interface NavigationLinkItem {
  href: string;
  label: string;
  description?: string;
}

export interface NavigationContext {
  section: "home" | "shop" | "print" | "company" | "service";
  isService: boolean;
  isPrint: boolean;
  isShop: boolean;
}

export const NAVIGATION_ROUTES = {
  home: "/",
  shop: "/",
  catalog: "/catalog",
  printOrder: "/checkout",
  account: "/account",
  about: "/about",
  contact: "/contact",
  faq: "/faq",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  logistics: "/logistics",
  warranty: "/warranty",
} as const;

const SERVICE_ROUTE_PREFIXES = [
  NAVIGATION_ROUTES.privacy,
  NAVIGATION_ROUTES.terms,
  NAVIGATION_ROUTES.cookies,
  NAVIGATION_ROUTES.logistics,
  NAVIGATION_ROUTES.warranty,
  NAVIGATION_ROUTES.account,
  NAVIGATION_ROUTES.about,
  NAVIGATION_ROUTES.contact,
  NAVIGATION_ROUTES.faq,
] as const;

export const SHOP_MENU_LINKS: NavigationLinkItem[] = [
  { href: NAVIGATION_ROUTES.shop, label: "nav.home" },
  { href: NAVIGATION_ROUTES.catalog, label: "nav.catalog" },
  { href: NAVIGATION_ROUTES.printOrder, label: "nav.printing" },
  { href: NAVIGATION_ROUTES.about, label: "nav.about" },
  { href: NAVIGATION_ROUTES.contact, label: "nav.contacts" },
];

export const PRINT_MENU_LINKS: NavigationLinkItem[] = [
  { href: NAVIGATION_ROUTES.printOrder, label: "nav.printing" },
  { href: NAVIGATION_ROUTES.catalog, label: "nav.catalog" },
  { href: NAVIGATION_ROUTES.contact, label: "nav.contacts" },
  { href: NAVIGATION_ROUTES.about, label: "nav.about" },
];

export const SERVICE_MENU_LINKS: NavigationLinkItem[] = [
  { href: NAVIGATION_ROUTES.shop, label: "nav.home" },
  { href: NAVIGATION_ROUTES.catalog, label: "nav.catalog" },
  { href: NAVIGATION_ROUTES.printOrder, label: "nav.printing" },
  { href: NAVIGATION_ROUTES.contact, label: "nav.contacts" },
];

export function getNavigationContext(pathname: string): NavigationContext {
  if (pathname === NAVIGATION_ROUTES.printOrder) {
    return {
      section: "print",
      isService: false,
      isPrint: true,
      isShop: false,
    };
  }

  if (
    pathname === NAVIGATION_ROUTES.shop ||
    pathname === NAVIGATION_ROUTES.home
  ) {
    return {
      section: "home",
      isService: false,
      isPrint: false,
      isShop: true,
    };
  }

  if (pathname.startsWith(NAVIGATION_ROUTES.catalog)) {
    return {
      section: "shop",
      isService: false,
      isPrint: false,
      isShop: true,
    };
  }

  if (SERVICE_ROUTE_PREFIXES.some((route) => pathname.startsWith(route))) {
    return {
      section: "service",
      isService: true,
      isPrint: false,
      isShop: false,
    };
  }

  return {
    section: "shop",
    isService: false,
    isPrint: false,
    isShop: true,
  };
}

export function isPrimaryNavigationVisible(pathname: string): boolean {
  return !getNavigationContext(pathname).isService;
}
