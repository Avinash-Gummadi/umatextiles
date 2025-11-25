import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CollectionPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const metadata = {
    title: "Curated Collection | Uma Textiles",
    description: "A special collection curated just for you.",
};

export default async function CollectionPage({ searchParams }: CollectionPageProps) {
    const params = await searchParams;
    const ids = params.id;

    let selectedProducts: import("@/data/products").Product[] = [];

    if (typeof ids === "string") {
        selectedProducts = products.filter((p) => p.id === ids);
    } else if (Array.isArray(ids)) {
        selectedProducts = products.filter((p) => ids.includes(p.id));
    }

    if (selectedProducts.length === 0) {
        return (
            <div className="container px-4 py-24 text-center">
                <h1 className="text-3xl font-serif font-bold mb-4">Collection Not Found</h1>
                <p className="text-muted-foreground mb-8">
                    It seems like no products were selected for this collection.
                </p>
                <Button asChild>
                    <Link href="/">Go Home</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="container px-4 md:px-6 py-12 md:py-16">
            <div className="mb-8">
                <Button variant="ghost" asChild className="pl-0 hover:pl-2 transition-all">
                    <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                        <ArrowLeft className="h-4 w-4" /> Back to Home
                    </Link>
                </Button>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <h1 className="text-3xl md:text-4xl font-serif font-bold">Curated For You</h1>
                <p className="text-muted-foreground max-w-2xl">
                    We've handpicked these items specifically for your taste.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {selectedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
