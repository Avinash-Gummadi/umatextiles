import { notFound } from "next/navigation";
import { products } from "@/data/products";
import RelatedProducts from "./related-products";
import { ProductDetailView } from "@/components/product/ProductDetailView";

// Generate static params for SSG
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.name} | Uma Textiles`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    // Related products logic
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id && p.stock > 0);

    // If not enough related products in same category, fill with other random products
    if (relatedProducts.length < 4) {
        const otherProducts = products
            .filter(p => p.category !== product.category && p.id !== product.id && p.stock > 0)
            .slice(0, 4 - relatedProducts.length);
        relatedProducts.push(...otherProducts);
    }

    return (
        <div className="container px-4 md:px-6 py-12 md:py-8 pb-24 md:pb-16">


            <div className="mb-6 md:mb-12">
                <ProductDetailView product={product} />
            </div>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <div className="space-y-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold">You might be interested in</h2>
                    <RelatedProducts products={relatedProducts} />
                </div>
            )}
        </div>
    );
}
