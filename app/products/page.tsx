import type { Metadata } from "next";
import { getProducts } from "@/lib/products";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products | MINHE",
  description:
    "Explore MINHE collections - pet co-living furniture for the living room, study and bedroom, plus fully bespoke custom pieces. Factory-direct from Foshan.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const products = getProducts();
  return <ProductsClient products={products} />;
}
