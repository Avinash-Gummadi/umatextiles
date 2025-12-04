import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

interface PriceDisplayProps {
    price: string;
    discountPrice?: string;
    className?: string;
    sellingPriceClassName?: string;
    originalPriceClassName?: string;
    discountInfoClassName?: string;
}

export function PriceDisplay({
    price,
    discountPrice,
    className,
    sellingPriceClassName,
    originalPriceClassName,
    discountInfoClassName
}: PriceDisplayProps) {
    // Helper to parse price string to number
    const parsePrice = (p: string) => {
        return parseInt(p.replace(/[^0-9]/g, ""), 10);
    };

    const originalPrice = parsePrice(price);
    const sellingPrice = discountPrice ? parsePrice(discountPrice) : 0;

    // Check if we have a valid discount
    const hasDiscount = sellingPrice > 0 && sellingPrice < originalPrice;

    if (!hasDiscount) {
        return (
            <span className={cn("text-lg font-semibold", className, sellingPriceClassName)}>
                {price}
            </span>
        );
    }

    const percentageOff = Math.round(((originalPrice - sellingPrice) / originalPrice) * 100);

    return (
        <div className={cn("flex flex-wrap items-baseline gap-x-2 gap-y-1", className)}>
            {/* Selling Price (Big & Bold) */}
            <span className={cn("text-xl font-bold text-foreground", sellingPriceClassName)}>
                {discountPrice}
            </span>

            {/* Original Price (Strikethrough & Muted) */}
            <span className={cn("text-sm text-muted-foreground line-through decoration-muted-foreground/60", originalPriceClassName)}>
                {price}
            </span>

            {/* Percentage Off (Green & Bold) */}
            <span className={cn("text-xs font-bold text-green-600 flex items-center", discountInfoClassName)}>
                {percentageOff}% off
            </span>
        </div>
    );
}
