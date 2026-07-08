"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

type Product = {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  tagline: string;
  mainImage: string;
};

const CATEGORY_ORDER: { id: string; n: string; title: string; subs: string[] }[] = [
  {
    id: "living",
    n: "01",
    title: "Living Room",
    subs: ["Sofas", "Pet Chairs", "Coffee & Side Tables", "Media Cabinets"],
  },
  {
    id: "study",
    n: "02",
    title: "Study",
    subs: ["Desks", "Cat-Climb Walls", "Litter Cabinets & Storage"],
  },
  {
    id: "bedroom",
    n: "03",
    title: "Bedroom",
    subs: ["Beds", "Wardrobes", "Other"],
  },
];

const WHATSAPP =
  "https://wa.me/8618320072414?text=" +
  encodeURIComponent("Hi MINHE, I'd like a custom pet furniture piece.");

export default function ProductsClient({ products }: { products: Product[] }) {
  return (
    <main className="bg-[#F7F2EA] text-stone-800">
      {/* HERO HEADER */}
      <section className="border-b border-stone-200/70 bg-gradient-to-b from-[#EFE6D8] to-[#F7F2EA] px-6 pt-36 pb-20 text-center sm:px-8 lg:px-10 lg:pt-44 lg:pb-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-stone-400">
            Collections
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extralight leading-[1.1] tracking-tight text-stone-900 sm:text-6xl">
            Furniture you both live in
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-loose text-stone-500">
            Explore our pieces by space. Every design hides a nook, den or bed for
            your companion - and everything can be tailored to order.
          </p>
        </FadeIn>
      </section>

      {/* CATEGORIES - full-width alternating bands */}
      {CATEGORY_ORDER.map((cat, catIndex) => {
        const inCat = products.filter((p) => p.category === cat.id);
        if (inCat.length === 0) return null;
        const tinted = catIndex % 2 === 1;
        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`scroll-mt-24 py-24 lg:py-32 ${
              tinted ? "border-y border-stone-200/60 bg-[#FCFAF5]" : ""
            }`}
          >
            <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
              <FadeIn>
                <div className="mb-14 flex items-baseline gap-5">
                  <span className="text-2xl font-extralight tracking-tight text-[#B39A80]">
                    {cat.n}
                  </span>
                  <div>
                    <h2 className="text-3xl font-extralight tracking-tight text-stone-900 sm:text-4xl">
                      {cat.title}
                    </h2>
                    <span className="mt-4 block h-px w-12 bg-[#B39A80]" />
                  </div>
                </div>
              </FadeIn>

              <div className="space-y-16">
                {cat.subs.map((sub) => {
                  const items = inCat.filter((p) => p.subcategory === sub);
                  if (items.length === 0) return null;
                  return (
                    <div key={sub}>
                      <FadeIn>
                        <p className="mb-8 text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
                          {sub}
                        </p>
                      </FadeIn>
                      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((product, index) => (
                          <FadeIn key={product.slug} delay={(index % 3) * 100}>
                            <Link href={`/products/${product.slug}`} className="group block">
                              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-soft transition-shadow duration-500 hover:shadow-luxe">
                                <Image
                                  src={product.mainImage}
                                  alt={product.name}
                                  fill
                                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                                />
                              </div>
                              <div className="mt-5">
                                <h3 className="text-lg font-light tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-[#B39A80]">
                                  {product.name}
                                </h3>
                                <p className="mt-1 text-sm font-light text-stone-400">
                                  {product.tagline}
                                </p>
                              </div>
                            </Link>
                          </FadeIn>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CUSTOM */}
      <section id="custom" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="relative overflow-hidden rounded-sm border border-stone-200 bg-[#EFE6D8] px-8 py-16 text-center shadow-soft sm:px-16">
              <span className="text-2xl font-extralight tracking-tight text-[#B39A80]">
                04
              </span>
              <h2 className="mt-3 text-3xl font-extralight tracking-tight text-stone-900 sm:text-4xl">
                Custom Furniture
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-base font-light leading-loose text-stone-600">
                Nothing quite right? Every piece can be made to order - sized to your
                space and your pets, in the fabrics and finishes you choose. Tell us
                what you have in mind and we&apos;ll design it with you.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/custom"
                  className="inline-flex items-center gap-2 bg-[#B39A80] px-8 py-3.5 text-sm font-medium tracking-[0.12em] text-white transition-colors duration-300 hover:bg-stone-900"
                >
                  EXPLORE CUSTOM
                  <span>&rarr;</span>
                </Link>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-[#B39A80] pb-1 text-sm font-medium tracking-[0.12em] text-[#B39A80] transition-colors duration-300 hover:border-stone-900 hover:text-stone-900"
                >
                  START ON WHATSAPP
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
