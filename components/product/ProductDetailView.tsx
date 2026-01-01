"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Truck, ShieldCheck } from "lucide-react";
import ProductActions from "@/app/products/[id]/product-actions";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { cn } from "@/lib/utils";

interface ProductDetailViewProps {
    product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
    // Default to the first color if available, or just use the first key in colorImages if available
    const [selectedColor, setSelectedColor] = React.useState<string | null>(
        product.color && product.color.length > 0 ? product.color[0] : null
    );

    // Determine the image to show
    const currentImage = React.useMemo(() => {
        if (selectedColor && product.colorImages && product.colorImages[selectedColor]) {
            return product.colorImages[selectedColor];
        }
        return product.image;
    }, [selectedColor, product.image, product.colorImages]);

    // Determine if the selected color is out of stock
    const isOutOfStock = React.useMemo(() => {
        if (selectedColor && product.outOfStockColors && product.outOfStockColors.includes(selectedColor)) {
            return true;
        }
        return false;
    }, [selectedColor, product.outOfStockColors]);

    return (
        <>
            <div className="mb-8 md:mb-2">
                <Button variant="ghost" asChild className="pl-0 hover:pl-2 transition-all">
                    <Link href="/products" className="flex items-center gap-2 text-muted-foreground hover:text-black">
                        <ArrowLeft className="h-4 w-4" /> Back to Collection
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-0 md:mb-12">
                {/* Image Section */}
                <div className="relative aspect-[3/4] md:aspect-square overflow-hidden rounded-lg bg-muted">
                    <Image
                        src={currentImage}
                        alt={product.name}
                        fill
                        className="object-cover transition-all duration-500"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        key={currentImage} // Force re-render animation when image changes
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col space-y-6">
                    <div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                            {product.category}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                            {product.name}
                        </h1>
                        <div className="mt-4">
                            <PriceDisplay price={product.price} discountPrice={product.discountPrice} className="text-2xl" />
                        </div>
                    </div>

                    {/* Color Selection */}
                    {product.color && product.color.length > 0 && (
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-muted-foreground">
                                Color: <span className="text-foreground">{selectedColor}</span>
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {product.color.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={cn(
                                            "px-4 py-2 rounded-full border text-sm transition-all relative",
                                            selectedColor === color
                                                ? "bg-primary text-primary-foreground border-primary"
                                                : "bg-background hover:bg-muted border-input"
                                        )}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="prose prose-stone max-w-none">
                        <p className="text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <div className="space-y-4 pt-6 border-t">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            {isOutOfStock ? (
                                <>
                                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                                    </div>
                                    <span className="text-red-600 font-medium">Out of Stock</span>
                                </>
                            ) : (
                                <>
                                    <Check className="h-5 w-5 text-green-500" />
                                    <span>In Stock & Ready to Ship</span>
                                </>
                            )}
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

                    <div className="pt-6">
                        <ProductActions productName={product.name} productId={product.id} />
                    </div>
                </div>
            </div>
        </>
    );
}
