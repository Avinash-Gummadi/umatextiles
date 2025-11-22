"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Link href={`/products/${product.id}`}>
                <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow bg-card">
                    <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <CardContent className="p-4">
                        <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                            {product.category}
                        </div>
                        <h3 className="font-serif text-lg font-medium line-clamp-1">
                            {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                            {product.description}
                        </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex items-center justify-between">
                        <span className="font-semibold text-primary">{product.price}</span>
                        <Button variant="outline" size="sm" className="text-xs">
                            View Details
                        </Button>
                    </CardFooter>
                </Card>
            </Link>
        </motion.div>
    );
}
