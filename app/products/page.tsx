import { products } from "@/data/products";


export const metadata = {
    title: "Collection | Uma Textiles",
    description: "Browse our exclusive collection of Sarees, Dresses, and more.",
};

import { Suspense } from "react";
import ProductsClient from "./products-client";

export default function ProductsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductsClient products={products} />
        </Suspense>
    );
}
