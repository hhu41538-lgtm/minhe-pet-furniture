import type { Metadata } from "next";
import Image from "next/image";
import { getFolderImagePaths } from "@/lib/imageAssets";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Case Showcase | MINHE",
  description:
    "Real homes shared by people and pets - a look at how MINHE brings pet co-living furniture into everyday life. Full case studies coming soon.",
  alternates: { canonical: "/case-showcase" },
};

const FALLBACK = "/images/Other/fallback.jpg";

const placeholderCases = [
  { id: "case-01", title: "A Living Room Built for Two", location: "Coming soon", folder: "Living" },
  { id: "case-02", title: "Where Work Meets Rest", location: "Coming soon", folder: "Study" },
  { id: "case-03", title: "A Bedroom That Holds You Both", location: "Coming soon", folder: "Bedroom" },
  { id: "case-04", title: "Co-Living, Whole-Home", location: "Coming soon", folder: "Hero" },
  { id: "case-05", title: "Quiet Corners for Companions", location: "Coming soon", folder: "Living" },
  { id: "case-06", title: "Designed Around Real Pets", location: "Coming soon", folder: "Bedroom" },
];

export default function CaseShowcasePage() {
  const cases = placeholderCases.map((item, index) => {
    const images = getFolderImagePaths(item.folder);
    return {
      ...item,
      image: images.length > 0 ? images[index % images.length] : FALLBACK,
    };
  });

  return (
    <main className="bg-[#F7F2EA] text-stone-800">
      {/* HERO HEADER */}
      <section className="border-b border-stone-200/70 bg-gradient-to-b from-[#EFE6D8] to-[#F7F2EA] px-6 pt-36 pb-20 text-center sm:px-8 lg:px-10 lg:pt-44 lg:pb-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-stone-400">
            Case Showcase
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extralight leading-[1.1] tracking-tight text-stone-900 sm:text-6xl">
            Real homes, shared beautifully
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-loose text-stone-500">
            Every delivery is a small experiment in living well with pets. We&apos;re
            putting together full case studies of real homes and interiors &mdash;
            coming soon.
          </p>
        </FadeIn>
      </section>

      {/* GRID */}
      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <FadeIn key={item.id} delay={(index % 3) * 100}>
              <article className="group relative block aspect-[16/9] overflow-hidden rounded-sm shadow-soft transition-shadow duration-500 hover:shadow-luxe">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-700 backdrop-blur">
                  Coming soon
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h2 className="text-lg font-light tracking-tight text-white">
                    {item.title}
                  </h2>
                  <span className="mt-3 block h-px w-8 bg-white/60 transition-all duration-500 group-hover:w-14" />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t border-stone-200/70 bg-[#EFE6D8] px-6 py-16 text-center sm:px-8 lg:px-10">
        <h2 className="text-2xl font-extralight tracking-tight text-stone-900 sm:text-3xl">
          Have a home in mind? Let&apos;s design it together.
        </h2>
        <a
          href="https://wa.me/8618320072414"
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
