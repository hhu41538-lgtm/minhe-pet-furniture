"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SubItem = { label: string; href: string };
type MenuColumn = { title: string; items: SubItem[] };

const productsMenu: MenuColumn[] = [
  {
    title: "Living Room",
    items: [
      { label: "Pet-Den Sofas", href: "/products#living" },
      { label: "Coffee & Side Tables", href: "/products#living" },
      { label: "Media Cabinets", href: "/products#living" },
    ],
  },
  {
    title: "Bedroom & Lounge",
    items: [
      { label: "Co-Sleep Beds", href: "/products#bedroom" },
      { label: "Pet Chaise & Loungers", href: "/products#lounge" },
      { label: "Accent Chairs", href: "/products#lounge" },
    ],
  },
  {
    title: "Storage & Utility",
    items: [
      { label: "Litter Cabinets", href: "/products#storage" },
      { label: "Storage Benches", href: "/products#storage" },
      { label: "Cat-Climb Shelving", href: "/products#storage" },
    ],
  },
];

const otherNavItems = [
  { label: "Home", href: "/" },
  { label: "Custom Furniture", href: "/custom" },
  { label: "Case Showcase", href: "/case-showcase" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const navLinkClass = (href: string, exact = true) => {
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    return `relative pb-1 transition hover:text-stone-950 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-[#B39A80] after:transition-all after:duration-300 ${
      isActive ? "text-stone-950 after:w-full" : "after:w-0 hover:after:w-full"
    }`;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 bg-[#F7F2EA] shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="MINHE home">
          <svg viewBox="0 0 120 120" className="h-9 w-9" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M34 92 Q28 92 28 86 L28 63 Q28 32 60 32 Q92 32 92 63 L92 86 Q92 92 86 92 Z" fill="#B39A80" />
            <ellipse cx="60" cy="75" rx="11" ry="8.5" fill="#F7F2EA" />
            <circle cx="46" cy="61" r="5" fill="#F7F2EA" />
            <circle cx="60" cy="55.5" r="5.5" fill="#F7F2EA" />
            <circle cx="74" cy="61" r="5" fill="#F7F2EA" />
          </svg>
          <span className="font-[family-name:var(--font-playfair-display)] text-2xl font-medium tracking-[0.2em] text-stone-900">
            MINHE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-stone-700 lg:flex">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link
              href="/products"
              className={`inline-flex items-center gap-1 ${navLinkClass("/products", false)}`}
            >
              Products
              <span aria-hidden className="text-xs">{"\u25BE"}</span>
            </Link>

            {megaOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
                <div className="w-[720px] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg">
                  <div className="grid grid-cols-3 gap-8 p-8">
                    {productsMenu.map((col) => (
                      <div key={col.title}>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                          {col.title}
                        </p>
                        <ul className="space-y-3">
                          {col.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="block text-sm text-stone-800 transition hover:text-[#B39A80]"
                                onClick={() => setMegaOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/custom"
                    onClick={() => setMegaOpen(false)}
                    className="group flex items-center justify-between border-t border-stone-100 bg-[#F7F2EA] px-8 py-5 transition-colors hover:bg-stone-100"
                  >
                    <span>
                      <span className="block text-sm font-semibold tracking-tight text-stone-900">
                        Custom & Whole-Home
                      </span>
                      <span className="mt-0.5 block text-xs font-light text-stone-500">
                        Bespoke pet-integrated furniture, made to order
                      </span>
                    </span>
                    <span className="text-sm text-[#B39A80] transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/custom" className={navLinkClass("/custom")}>
            Custom Furniture
          </Link>
          <Link href="/case-showcase" className={navLinkClass("/case-showcase")}>
            Case Showcase
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            About us
          </Link>
          <Link href="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-stone-300 text-stone-700 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="text-lg">{mobileOpen ? "\u2715" : "\u2630"}</span>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-stone-200 bg-[#F7F2EA] lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
            <ul className="space-y-1 text-sm font-medium text-stone-800">
              <li>
                <Link
                  href="/"
                  className={`block rounded px-3 py-3 hover:bg-stone-100 ${
                    pathname === "/" ? "bg-stone-100 text-[#B39A80]" : ""
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded px-3 py-3 text-left hover:bg-stone-100"
                  onClick={() => setMobileProductsOpen((v) => !v)}
                >
                  <span>Products</span>
                  <span aria-hidden className="text-xs">
                    {mobileProductsOpen ? "\u25B4" : "\u25BE"}
                  </span>
                </button>
                {mobileProductsOpen && (
                  <div className="mt-1 space-y-4 rounded-lg bg-white px-4 py-4">
                    {productsMenu.map((col) => (
                      <div key={col.title}>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                          {col.title}
                        </p>
                        <ul className="space-y-1 pl-1">
                          {col.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="block rounded px-2 py-2 text-sm text-stone-800 hover:bg-stone-100"
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileProductsOpen(false);
                                }}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
              {otherNavItems
                .filter((item) => item.label !== "Home")
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded px-3 py-3 hover:bg-stone-100 ${
                        pathname === item.href ? "bg-stone-100 text-[#B39A80]" : ""
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
