import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Contact | MINHE",
  description:
    "Get in touch with MINHE - modern pet co-living furniture handcrafted in Foshan, China. Chat with us on WhatsApp, we respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

const WHATSAPP = "https://wa.me/8618320072414";

const socialLinks = [
  { platform: "TikTok", href: "https://www.tiktok.com/@foshan_minhe_home", handle: "@foshan_minhe_home" },
  { platform: "Instagram", href: "https://www.instagram.com/minhe_petfurniture", handle: "@minhe_petfurniture" },
  { platform: "Facebook", href: "https://www.facebook.com/share/18pjZeP97F/", handle: "MINHE Pet & Home Living" },
];

export default function ContactPage() {
  return (
    <main className="bg-[#F7F2EA] text-stone-800">
      {/* HEADER */}
      <section className="px-6 pt-32 sm:px-8 lg:px-10 lg:pt-40">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-stone-400">
              Contact
            </p>
            <h1 className="mt-5 text-4xl font-extralight tracking-tight text-stone-900 sm:text-6xl">
              Get in touch
            </h1>
            <p className="mx-auto mt-8 max-w-md text-base font-light leading-loose text-stone-500">
              We&apos;d love to hear about your home and your pets. Reach out and a
              member of our team will respond within 24 hours.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-[#B39A80] px-8 py-3.5 text-sm font-medium tracking-[0.12em] text-white transition-colors duration-300 hover:bg-stone-900"
            >
              CHAT ON WHATSAPP
              <span>&rarr;</span>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* INFO */}
      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <div className="border-t border-stone-200 pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-400">
                Atelier
              </p>
              <h2 className="mt-6 text-2xl font-extralight tracking-tight text-stone-900">
                MINHE
              </h2>
              <p className="mt-5 text-base font-light leading-loose text-stone-500">
                Shunde District, Longjiang Town
                <br />
                Foshan, Guangdong, China
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-[0.12em] text-[#B39A80] transition-colors duration-300 hover:text-stone-900"
              >
                +86 183 2007 2414
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="border-t border-stone-200 pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-400">
                Social
              </p>
              <div className="mt-6 space-y-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <p className="text-base font-light tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-[#B39A80]">
                      {link.platform}
                    </p>
                    <p className="mt-1 text-sm font-light leading-relaxed text-stone-500">
                      {link.handle}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t border-stone-200/70 bg-white/60 px-6 py-16 text-center sm:px-8 lg:px-10">
        <h2 className="text-2xl font-extralight tracking-tight text-stone-900 sm:text-3xl">
          Let&apos;s create a home you both love.
        </h2>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 border-b border-[#B39A80] pb-1 text-sm font-medium tracking-[0.12em] text-[#B39A80] transition-colors duration-300 hover:border-stone-900 hover:text-stone-900"
        >
          START A CONVERSATION
          <span>&rarr;</span>
        </a>
      </section>
    </main>
  );
}
