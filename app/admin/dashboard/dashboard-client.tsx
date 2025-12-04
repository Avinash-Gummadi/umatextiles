"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Link as LinkIcon, AlertCircle } from "lucide-react";

interface DashboardClientProps {
    products: Product[];
}

export default function DashboardClient({ products }: DashboardClientProps) {
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [generatedLink, setGeneratedLink] = useState("");

    const activeProducts = products.filter(p => p.stock > 0);
    const outOfStockProducts = products.filter(p => p.stock === 0);

    const toggleProduct = (productId: string) => {
        setSelectedProducts((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };

    const generateLink = () => {
        if (selectedProducts.length === 0) {
            toast.error("Please select at least one product");
            return;
        }

        const baseUrl = window.location.origin;
        const params = new URLSearchParams();
        selectedProducts.forEach((id) => params.append("id", id));

        const link = `${baseUrl}/collection?${params.toString()}`;
        setGeneratedLink(link);
        toast.success("Link generated successfully!");
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

    return (
        <div className="space-y-8">
            <Tabs defaultValue="active" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
                    <TabsTrigger value="active">Active Products</TabsTrigger>
                    <TabsTrigger value="out-of-stock">Out of Stock ({outOfStockProducts.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="space-y-8 mt-6">
                    <Card>
                        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 pb-2">
                            <div className="space-y-1">
                                <CardTitle className="text-2xl font-semibold">Select Products</CardTitle>
                                <CardDescription>
                                    Choose products to create a curated collection link.
                                </CardDescription>
                            </div>
                            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                                <span className="text-sm font-medium">
                                    {selectedProducts.length} selected
                                </span>
                                <Button onClick={generateLink} disabled={selectedProducts.length === 0}>
                                    <LinkIcon className="mr-2 h-4 w-4" />
                                    Generate Link
                                </Button>
                            </div>
                        </CardHeader>
                    </Card>

                    {generatedLink && (
                        <Card className="bg-muted/50 border-primary/20">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex-1 p-3 bg-background rounded-md border font-mono text-sm break-all">
                                        {generatedLink}
                                    </div>
                                    <Button onClick={copyLink} variant="secondary">
                                        <Copy className="mr-2 h-4 w-4" />
                                        Copy
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

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
                                        className="mt-1"
                                    />
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
                                        <div className="h-16 w-16 rounded bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden">
                                            <img src={product.image} alt={product.name} className="h-full w-full object-cover grayscale" />
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
