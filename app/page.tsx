import Image from "next/image";
import Link from "next/link";
import { getFolderImagePaths, getRepresentativeImage } from "@/lib/imageAssets";
import { getProducts } from "@/lib/products";
import HeroCarousel from "./HeroCarousel";
import FadeIn from "@/components/ui/FadeIn";

const FALLBACK = "/images/Other/fallback.jpg";

const spaceCategories = [
  {
    n: "01",
    title: "Living Room",
    href: "/products#living",
    folder: "Living",
    description: "Sofas, pet chairs, tables and media cabinets with nooks and dens built in.",
  },
  {
    n: "02",
    title: "Study",
    href: "/products#study",
    folder: "Study",
    description: "Desks, cat-climb walls and litter cabinets for a calm, shared workspace.",
  },
  {
    n: "03",
    title: "Bedroom",
    href: "/products#bedroom",
    folder: "Bedroom",
    description: "Beds, wardrobes and nightstands with a safe, quiet space for your pet.",
  },
  {
    n: "04",
    title: "Custom",
    href: "/custom",
    folder: "Hero",
    description: "Bespoke pieces, sized to your home and your pets. Made to order.",
  },
];

const stats = [
  { value: "13+", label: "Co-living designs" },
  { value: "4", label: "Spaces, one system" },
  { value: "Worldwide", label: "Factory-direct shipping" },
  { value: "Bespoke", label: "Custom sizing & fabrics" },
];

const spans = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-20",
  "lg:col-span-5",
  "lg:col-span-7 lg:mt-8",
  "lg:col-span-6",
  "lg:col-span-6 lg:mt-14",
];
const ratios = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[16/10]",
  "aspect-[4/3]",
  "aspect-[5/4]",
];

export default function Home() {
  const heroImages = getFolderImagePaths("Hero");
  const heroSlides = heroImages.length > 0 ? heroImages : [FALLBACK];
  const ethosImage = getRepresentativeImage("Living", FALLBACK);
  const immersiveImage = heroImages[2] ?? heroImages[0] ?? FALLBACK;
  const categoryCards = spaceCategories.map((category) => ({
    ...category,
    image: getRepresentativeImage(category.folder, FALLBACK),
  }));
  const featured = getProducts().slice(0, 6);

  return (
    <main className="bg-[#F7F2EA] text-stone-800">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <HeroCarousel images={heroSlides} />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
          <p className="hero-rise mb-8 text-xs font-medium uppercase tracking-[0.5em] text-white/70" style={{ animationDelay: "0.1s" }}>
            MINHE
          </p>
          <h1 className="hero-rise max-w-4xl text-[2.75rem] font-extralight leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[5rem]" style={{ animationDelay: "0.25s" }}>
            Where pets belong,
            <br className="hidden sm:block" /> beautifully
          </h1>
          <p className="hero-rise mt-8 max-w-xl text-base font-light leading-relaxed tracking-wide text-white/80" style={{ animationDelay: "0.45s" }}>
            Modern co-living furniture with hidden nooks, dens, and beds built in.
          </p>
          <a
            href="/products"
            className="hero-rise group mt-12 inline-flex items-center gap-2 border-b border-white/50 pb-1 text-sm font-medium tracking-[0.15em] text-white transition-colors duration-300 hover:border-white"
            style={{ animationDelay: "0.65s" }}
          >
            EXPLORE COLLECTIONS
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="border-y border-stone-200/70 bg-[#EFE6D8]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-6 py-10 text-center ${index % 2 === 1 ? "border-l border-stone-300/50" : ""} ${index >= 2 ? "border-t border-stone-300/50 md:border-t-0" : ""} md:border-l md:border-stone-300/50 md:first:border-l-0`}
            >
              <p className="text-2xl font-extralight tracking-tight text-stone-900 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND ETHOS - asymmetric + parallax */}
      <section className="px-6 py-28 sm:px-8 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-stone-400">
                Our Philosophy
              </p>
              <h2 className="mt-6 text-4xl font-extralight leading-[1.15] tracking-tight text-stone-900 sm:text-5xl">
                Designed for people and pets to live beautifully together.
              </h2>
              <p className="mt-8 max-w-md text-base font-light leading-loose text-stone-500">
                Every piece hides a nook, den, or bed for your companion &mdash;
                built by hand in our Foshan atelier, where considered design meets a
                calmer, more beautiful way to share a home with the ones you love
                most.
              </p>
              <a
                href="/about"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-medium tracking-[0.12em] text-[#B39A80] transition-colors duration-300 hover:text-stone-900"
              >
                OUR STORY
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={150} className="lg:col-span-7">
            <div
              className="parallax shadow-luxe aspect-[16/11] overflow-hidden rounded-sm"
              style={{ backgroundImage: `url(${ethosImage})` }}
              role="img"
              aria-label="MINHE pet co-living interior"
            />
          </FadeIn>
        </div>
      </section>

      {/* CATEGORIES 01-04 */}
      <section className="border-y border-stone-200/60 bg-[#FCFAF5] px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-14 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.4em] text-stone-400">
                  Collections
                </p>
                <h2 className="mt-4 text-3xl font-extralight tracking-tight text-stone-900 sm:text-5xl">
                  Explore by space
                </h2>
              </div>
              <Link
                href="/products"
                className="group hidden items-center gap-2 pb-1 text-sm font-medium tracking-[0.12em] text-[#B39A80] transition-colors duration-300 hover:text-stone-900 sm:inline-flex"
              >
                ALL PRODUCTS
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categoryCards.map((category, index) => (
              <FadeIn key={category.title} delay={index * 100}>
                <Link
                  href={category.href}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-sm shadow-soft transition-shadow duration-500 hover:shadow-luxe"
                >
                  <Image
                    src={category.image}
                    alt={`${category.title} collection`}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                  <span className="absolute left-5 top-5 text-sm font-light tracking-wider text-white/80">
                    {category.n}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-lg font-light tracking-tight text-white">
                      {category.title}
                    </h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm font-light leading-relaxed text-white/0 transition-all duration-500 group-hover:max-h-28 group-hover:text-white/75">
                      {category.description}
                    </p>
                    <span className="mt-3 block h-px w-8 bg-white/60 transition-all duration-500 group-hover:w-16" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* IMMERSIVE full-width parallax */}
      <section
        className="parallax relative flex min-h-[70vh] items-center justify-center"
        style={{ backgroundImage: `url(${immersiveImage})` }}
      >
        <div className="absolute inset-0 bg-stone-950/45" />
        <FadeIn>
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.5em] text-white/70">
              Human &amp; Pet, Living as One
            </p>
            <h2 className="mt-6 text-3xl font-extralight leading-tight tracking-tight text-white sm:text-5xl">
              A home that holds you both.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base font-light leading-loose text-white/80">
              Furniture where every curve, nook and step is designed around the way
              you and your pet actually live.
            </p>
            <Link
              href="/custom"
              className="group mt-10 inline-flex items-center gap-2 border-b border-white/50 pb-1 text-sm font-medium tracking-[0.15em] text-white transition-colors duration-300 hover:border-white"
            >
              DESIGN YOURS
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* NEW ARRIVALS - editorial staggered grid */}
      <section id="new-arrivals" className="scroll-mt-24 px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-16 flex flex-col items-center text-center">
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-stone-400">
                Just In
              </p>
              <h2 className="mt-4 text-4xl font-extralight tracking-tight text-stone-900 sm:text-5xl">
                New Arrivals
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {featured.map((product, index) => (
              <FadeIn key={product.slug} delay={(index % 3) * 100} className={spans[index] ?? "lg:col-span-6"}>
                <Link href={`/products/${product.slug}`} className="group block">
                  <div className={`relative ${ratios[index] ?? "aspect-[4/3]"} overflow-hidden rounded-sm shadow-soft transition-shadow duration-500 hover:shadow-luxe`}>
                    <Image
                      src={product.mainImage}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-800 backdrop-blur">
                      New
                    </span>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-base font-light tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-[#B39A80]">
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
          <FadeIn>
            <div className="mt-20 text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#B39A80] px-8 py-3.5 text-sm font-medium tracking-[0.12em] text-white transition-colors duration-300 hover:bg-stone-900"
              >
                VIEW ALL PRODUCTS
                <span>&rarr;</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <section className="border-t border-stone-200/70 bg-[#EFE6D8] px-6 py-12 text-center sm:px-8 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-stone-500">
          Factory Direct &middot; Pet-Safe Materials &middot; Custom Orders Welcome &middot; Est. 2026
        </p>
      </section>
    </main>
  );
}
