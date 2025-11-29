import { products } from "@/data/products";


export const metadata = {
    title: "Collection | Uma Textiles",
    description: "Browse our exclusive collection of Sarees, Dresses, and more.",
};

import ProductsClient from "./products-client";

export default function ProductsPage() {
    return <ProductsClient products={products} />;
}
