import Link from "next/link";

const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com/@foshan_minhe_home" },
  { label: "Instagram", href: "https://www.instagram.com/minhe_petfurniture" },
  { label: "Facebook", href: "https://www.facebook.com/share/18pjZeP97F/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#F7F2EA]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-stone-600 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div>
          <p className="font-[family-name:var(--font-playfair-display)] text-xl font-medium tracking-[0.2em] text-stone-900">
            MINHE
          </p>
          <p className="mt-2 text-base text-stone-700">Where pets belong, beautifully</p>
          <p className="mt-3">Shunde District, Longjiang Town, Foshan, Guangdong, China</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-stone-700 transition-colors duration-300 hover:text-[#B39A80]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Link
            href="https://wa.me/8618320072414"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-stone-700 transition-colors duration-300 hover:text-[#B39A80]"
          >
            WhatsApp
          </Link>
          <Link
            href="/privacy"
            className="font-medium text-stone-500 transition-colors duration-300 hover:text-[#B39A80]"
          >
            Privacy Policy
          </Link>
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
            &copy; 2026 MINHE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
