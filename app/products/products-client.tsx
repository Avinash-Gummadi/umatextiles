"use client";

import { useState, useMemo } from "react";
import { Product } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Filter, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductsClientProps {
    products: Product[];
}

export default function ProductsClient({ products }: ProductsClientProps) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);

    // Extract unique options
    const categories = useMemo(() => Array.from(new Set(products.map(p => p.category))).sort(), [products]);
    const fabrics = useMemo(() => Array.from(new Set(products.map(p => p.fabric))).sort(), [products]);
    const colors = useMemo(() => {
        const allColors = products.flatMap(p => p.color);
        return Array.from(new Set(allColors)).sort();
    }, [products]);

    // Filter logic
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            if (product.stock === 0) return false;

            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const matchesFabric = selectedFabrics.length === 0 || selectedFabrics.includes(product.fabric);
            const matchesColor = selectedColors.length === 0 || product.color.some(c => selectedColors.includes(c));

            return matchesCategory && matchesFabric && matchesColor;
        });
    }, [products, selectedCategories, selectedFabrics, selectedColors]);

    const toggleFilter = (item: string, current: string[], setter: (val: string[]) => void) => {
        if (current.includes(item)) {
            setter(current.filter(i => i !== item));
        } else {
            setter([...current, item]);
        }
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setSelectedFabrics([]);
        setSelectedColors([]);
    };

    const hasActiveFilters = selectedCategories.length > 0 || selectedFabrics.length > 0 || selectedColors.length > 0;

    return (
        <div className="container px-4 md:px-6 py-12 md:py-16">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
                <h1 className="text-3xl md:text-4xl font-serif font-bold">Our Collection</h1>
                <p className="text-muted-foreground max-w-2xl">
                    Explore our handpicked selection of premium textiles, crafted with tradition and elegance in mind.
                </p>
            </div>

            <div className="flex justify-end mb-6">
                <Button
                    variant="outline"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className={cn("gap-2", isFilterOpen && "bg-secondary")}
                >
                    <Filter className="h-4 w-4" />
                    {isFilterOpen ? "Hide Filters" : "Show Filters"}
                    {hasActiveFilters && (
                        <span className="ml-1 rounded-full bg-primary w-2 h-2" />
                    )}
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 relative">
                {/* Product Grid */}
                <div className="flex-1 transition-all duration-300 ease-in-out">
                    <div className={cn(
                        "grid gap-6 md:gap-8 transition-all duration-300",
                        isFilterOpen
                            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
                            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    )}>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12 text-muted-foreground">
                                No products found matching your filters.
                            </div>
                        )}
                    </div>
                </div>

                {/* Desktop Sidebar - Hidden on mobile */}
                <div className={cn(
                    "hidden lg:block lg:w-[300px] flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden",
                    isFilterOpen ? "w-full opacity-100" : "w-0 opacity-0 lg:w-0 h-0 lg:h-auto"
                )}>
                    <div className="bg-background border-l border-b border-t rounded-l-lg shadow-sm h-full">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="font-serif font-bold text-lg">Filters</h2>
                            {hasActiveFilters && (
                                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs h-auto p-0 text-muted-foreground hover:text-foreground">
                                    Clear All
                                </Button>
                            )}
                        </div>

                        <div className="p-4 space-y-6">
                            <FilterList
                                categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}
                                fabrics={fabrics} selectedFabrics={selectedFabrics} setSelectedFabrics={setSelectedFabrics}
                                colors={colors} selectedColors={selectedColors} setSelectedColors={setSelectedColors}
                                toggleFilter={toggleFilter}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Sheet */}
            {isFilterOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsFilterOpen(false)}
                    />

                    {/* Sheet */}
                    <div className="absolute bottom-0 left-0 right-0 bg-background rounded-t-xl shadow-2xl max-h-[85vh] flex flex-col animate-in slide-in-from-bottom duration-300">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="font-serif font-bold text-lg">Filters</h2>
                            <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-6">
                            <FilterList
                                categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}
                                fabrics={fabrics} selectedFabrics={selectedFabrics} setSelectedFabrics={setSelectedFabrics}
                                colors={colors} selectedColors={selectedColors} setSelectedColors={setSelectedColors}
                                toggleFilter={toggleFilter}
                            />
                        </div>

                        <div className="p-4 border-t bg-muted/20 flex gap-3">
                            <Button variant="outline" className="flex-1" onClick={clearFilters} disabled={!hasActiveFilters}>
                                Clear All
                            </Button>
                            <Button className="flex-1" onClick={() => setIsFilterOpen(false)}>
                                Apply Filters
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

interface FilterListProps {
    categories: string[];
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
    fabrics: string[];
    selectedFabrics: string[];
    setSelectedFabrics: (fabrics: string[]) => void;
    colors: string[];
    selectedColors: string[];
    setSelectedColors: (colors: string[]) => void;
    toggleFilter: (item: string, current: string[], setter: (items: string[]) => void) => void;
}

// Helper component for filter list
function FilterList({
    categories, selectedCategories, setSelectedCategories,
    fabrics, selectedFabrics, setSelectedFabrics,
    colors, selectedColors, setSelectedColors,
    toggleFilter
}: FilterListProps) {
    return (
        <>
            <FilterSection
                title="Category"
                options={categories}
                selected={selectedCategories}
                onToggle={(item) => toggleFilter(item, selectedCategories, setSelectedCategories)}
            />
            <FilterSection
                title="Fabric"
                options={fabrics}
                selected={selectedFabrics}
                onToggle={(item) => toggleFilter(item, selectedFabrics, setSelectedFabrics)}
            />
            <FilterSection
                title="Color"
                options={colors}
                selected={selectedColors}
                onToggle={(item) => toggleFilter(item, selectedColors, setSelectedColors)}
            />
        </>
    );
}

function FilterSection({ title, options, selected, onToggle }: { title: string, options: string[], selected: string[], onToggle: (item: string) => void }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="border-b pb-4 last:border-0 last:pb-0">
            <button
                className="flex items-center justify-between w-full py-1 font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen ? "rotate-180" : "")} />
            </button>
            <div className={cn("space-y-2 mt-2 overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
                <div className="pt-1 space-y-2">
                    {options.map(option => (
                        <div key={option} className="flex items-center space-x-2">
                            <Checkbox
                                id={`${title}-${option}`}
                                checked={selected.includes(option)}
                                onCheckedChange={() => onToggle(option)}
                            />
                            <Label htmlFor={`${title}-${option}`} className="cursor-pointer text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {option}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
