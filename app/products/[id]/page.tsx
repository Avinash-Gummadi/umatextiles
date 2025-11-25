import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Truck, ShieldCheck } from "lucide-react";

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

    return (
        <div className="container px-4 md:px-6 py-12 md:py-16">
            <div className="mb-8">
                <Button variant="ghost" asChild className="pl-0 hover:pl-2 transition-all">
                    <Link href="/products" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                        <ArrowLeft className="h-4 w-4" /> Back to Collection
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {/* Image Section */}
                <div className="relative aspect-[3/4] md:aspect-square overflow-hidden rounded-lg bg-muted">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-center space-y-6">
                    <div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                            {product.category}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-medium text-primary mt-4">
                            {product.price}
                        </p>
                    </div>

                    <div className="prose prose-stone max-w-none">
                        <p className="text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <div className="space-y-4 pt-6 border-t">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>In Stock & Ready to Ship</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Truck className="h-5 w-5 text-primary" />
                            <span>Free Delivery on orders above ₹999</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <ShieldCheck className="h-5 w-5 text-primary" />
                            <span>Quality Assured</span>
                        </div>
                    </div>

                    <div className="pt-6 flex gap-4">
                        <Button size="lg" className="w-full md:w-auto px-8">
                            Add to Cart
                        </Button>
                        <Button size="lg" variant="outline" className="w-full md:w-auto">
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
