import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata = {
    title: "Collection | Uma Textiles",
    description: "Browse our exclusive collection of Sarees, Dresses, and more.",
};

export default function ProductsPage() {
    return (
        <div className="container px-4 md:px-6 py-12 md:py-16">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <h1 className="text-3xl md:text-4xl font-serif font-bold">Our Collection</h1>
                <p className="text-muted-foreground max-w-2xl">
                    Explore our handpicked selection of premium textiles, crafted with tradition and elegance in mind.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {products.filter(p => p.stock > 0).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
