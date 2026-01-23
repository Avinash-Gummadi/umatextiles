"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Link as LinkIcon, AlertCircle, Share2 } from "lucide-react";

interface DashboardClientProps {
    products: Product[];
}

export default function DashboardClient({ products }: DashboardClientProps) {
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [generatedLink, setGeneratedLink] = useState("");
    const [selectedGalleryItems, setSelectedGalleryItems] = useState<string[]>([]);

    const activeProducts = products.filter(p => p.stock > 0);
    const outOfStockProducts = products.filter(p => p.stock === 0);

    useEffect(() => {
        if (selectedProducts.length === 0) {
            setGeneratedLink("");
            return;
        }

        const baseUrl = window.location.origin;
        const params = new URLSearchParams();
        selectedProducts.forEach((id) => params.append("id", id));

        const link = `${baseUrl}/collection?${params.toString()}`;
        setGeneratedLink(link);
    }, [selectedProducts]);

    const toggleProduct = (productId: string) => {
        setSelectedProducts((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };

    const toggleGalleryItem = (productId: string) => {
        setSelectedGalleryItems((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };

    const copyLink = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(generatedLink).then(() => {
                toast.success("Link copied to clipboard!");
            }).catch((err) => {
                console.error("Failed to copy: ", err);
                toast.error("Failed to copy link");
            });
        } else {
            // Fallback for insecure contexts
            try {
                const textArea = document.createElement("textarea");
                textArea.value = generatedLink;
                textArea.style.position = "fixed"; // Avoid scrolling to bottom
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);

                if (successful) {
                    toast.success("Link copied to clipboard!");
                } else {
                    toast.error("Failed to copy link");
                }
            } catch (err) {
                console.error("Fallback copy failed:", err);
                toast.error("Failed to copy link");
            }
        }
    };

    const handleShare = async () => {
        if (selectedGalleryItems.length === 0) {
            toast.error("Please select at least one image to share");
            return;
        }

        const selectedProductDetails = products.filter(p => selectedGalleryItems.includes(p.id));

        // Try Native Share API with Files
        if (navigator.share) {
            try {
                // 1. Fetch images and convert to Blobs
                const filePromises = selectedProductDetails.map(async (product) => {
                    try {
                        const response = await fetch(product.image);
                        const blob = await response.blob();
                        // Get file extension from generic type or url, default to png
                        const type = blob.type || 'image/png';
                        const extension = type.split('/')[1] || 'png';

                        return new File([blob], `${product.name.replace(/\s+/g, '_')}.${extension}`, {
                            type: type,
                        });
                    } catch (error) {
                        console.error(`Failed to load image for ${product.name}`, error);
                        return null;
                    }
                });

                const files = (await Promise.all(filePromises)).filter((f): f is File => f !== null);

                if (files.length > 0 && navigator.canShare && navigator.canShare({ files })) {
                    await navigator.share({
                        files: files,
                        title: 'Check out these products!',
                        text: 'Here are some products I found for you.',
                    });
                    return;
                } else {
                    // If files cannot be shared (e.g. desktop), fall through to text share
                    console.warn("Device does not support file sharing or files validation failed.");
                }

            } catch (err) {
                // AbortError is common if user cancels share sheet
                if ((err as Error).name !== 'AbortError') {
                    console.error("Error sharing files:", err);
                    toast.error("Failed to share images directly. Sharing details instead.");
                } else {
                    return; // User cancelled, don't fallback
                }
            }
        }

        // Fallback or specific WhatsApp button behavior
        const text = selectedProductDetails.map(p =>
            `*${p.name}*\nPrice: ${p.price}\n${p.description}`
        ).join("%0a%0a");

        window.open(`https://wa.me/?text=${text}`, '_blank');
    };

    const shareLink = async () => {
        const shareData = {
            title: 'Uma Textiles Collection',
            text: 'Check out this collection of products!',
            url: generatedLink,
        };

        if (navigator.share && navigator.canShare(shareData)) {
            try {
                await navigator.share(shareData);
                toast.success("Shared successfully!");
            } catch (err) {
                if ((err as Error).name !== 'AbortError') {
                    console.error("Error sharing link:", err);
                    toast.error("Failed to share link");
                }
            }
        } else {
            // Fallback to WhatsApp
            const text = `Check out this collection: ${generatedLink}`;
            window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
        }
    };

    return (
        <div className="space-y-8">
            <Tabs defaultValue="active" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-[600px] h-auto">
                    <TabsTrigger value="active" className="text-xs sm:text-sm px-1 sm:px-3">Active Products</TabsTrigger>
                    <TabsTrigger value="active-gallery" className="text-xs sm:text-sm px-1 sm:px-3">Active Gallery</TabsTrigger>
                    <TabsTrigger value="out-of-stock" className="text-xs sm:text-sm px-1 sm:px-3">Out of Stock ({outOfStockProducts.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="space-y-8 mt-6">
                    <Card className="border-primary/20 bg-muted/10">
                        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
                            <div>
                                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                                    Collection Builder
                                    {selectedProducts.length > 0 && (
                                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                                            {selectedProducts.length} selected
                                        </span>
                                    )}
                                </CardTitle>
                                <CardDescription>
                                    Select products below to automatically generate a shareable link.
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="min-h-[110px] sm:min-h-[60px] flex flex-col justify-center">
                                {selectedProducts.length > 0 && generatedLink ? (
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-background p-2 rounded-lg border shadow-sm animate-in fade-in zoom-in duration-300">
                                        <div className="flex-1 min-w-0 px-3 py-2 text-sm font-mono text-muted-foreground truncate rounded bg-muted/30">
                                            {generatedLink}
                                        </div>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <Button size="sm" onClick={copyLink} className="flex-1 sm:flex-none">
                                                <Copy className="mr-2 h-3.5 w-3.5" />
                                                Copy
                                            </Button>
                                            <Button size="sm" variant="outline" onClick={shareLink} className="flex-1 sm:flex-none">
                                                <Share2 className="mr-2 h-3.5 w-3.5" />
                                                Share
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-sm text-muted-foreground italic px-2 text-center border-2 border-dashed border-muted rounded-lg h-full flex items-center justify-center bg-muted/5 py-8 sm:py-4">
                                        Start selecting products from the list below...
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {activeProducts.map((product) => (
                            <Card
                                key={product.id}
                                className={`cursor-pointer transition-all border-2 ${selectedProducts.includes(product.id)
                                    ? "border-primary bg-primary/5"
                                    : "border-transparent hover:border-muted-foreground/25"
                                    }`}
                                onClick={() => toggleProduct(product.id)}
                            >
                                <CardContent className="p-4 flex items-start gap-4">
                                    <Checkbox
                                        checked={selectedProducts.includes(product.id)}
                                        onCheckedChange={() => toggleProduct(product.id)}
                                        onClick={(e) => e.stopPropagation()}
                                        className="mt-1"
                                    />
                                    {/* Image Logic Fix: Ensure product.image is used if available */}
                                    <div className="h-20 w-20 rounded bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-medium leading-none">{product.name}</h3>
                                        <p className="text-sm text-muted-foreground">{product.price}</p>
                                        <p className="text-xs text-muted-foreground uppercase mt-1">
                                            {product.category}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Stock: {product.stock}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="active-gallery" className="space-y-8 mt-6">
                    <Card>
                        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 pb-2">
                            <div className="space-y-1">
                                <CardTitle className="text-2xl font-semibold">Product Gallery</CardTitle>
                                <CardDescription>
                                    Select images to share via WhatsApp or other apps.
                                </CardDescription>
                            </div>
                            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                                <span className="text-sm font-medium">
                                    {selectedGalleryItems.length} selected
                                </span>
                                <Button onClick={handleShare} disabled={selectedGalleryItems.length === 0}>
                                    Share
                                </Button>
                            </div>
                        </CardHeader>
                    </Card>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {activeProducts.map((product) => (
                            <div
                                key={product.id}
                                className={`group relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${selectedGalleryItems.includes(product.id) ? "border-primary ring-2 ring-primary ring-offset-2" : "border-transparent hover:border-muted-foreground/50"
                                    }`}
                                onClick={() => toggleGalleryItem(product.id)}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                />
                                <div className={`absolute inset-0 bg-black/40 transition-opacity flex items-center justify-center ${selectedGalleryItems.includes(product.id) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}>
                                    <Checkbox
                                        checked={selectedGalleryItems.includes(product.id)}
                                        className="h-6 w-6 border-white/80 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-xs font-medium truncate">{product.name}</p>
                                    <p className="text-[10px] opacity-80">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="out-of-stock" className="mt-6">
                    {outOfStockProducts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center border rounded-lg bg-muted/10">
                            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-medium">No Out of Stock Products</h3>
                            <p className="text-muted-foreground max-w-sm mt-2">
                                All products are currently in stock.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {outOfStockProducts.map((product) => (
                                <Card key={product.id} className="opacity-75 border-dashed">
                                    <CardContent className="p-4 flex items-start gap-4">
                                        <div className="h-16 w-16 rounded bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover grayscale"
                                                sizes="64px"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-medium leading-none">{product.name}</h3>
                                            <p className="text-sm text-muted-foreground">{product.price}</p>
                                            <p className="text-xs text-muted-foreground uppercase mt-1">
                                                {product.category}
                                            </p>
                                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 mt-2">
                                                Out of Stock
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
}
