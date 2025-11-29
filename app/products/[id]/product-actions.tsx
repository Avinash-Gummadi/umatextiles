"use client";

import { Button } from "@/components/ui/button";
import { Share2, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface ProductActionsProps {
    productName: string;
    productId: string;
}

export default function ProductActions({ productName, productId }: ProductActionsProps) {
    const handleShare = async () => {
        const url = window.location.href;
        const shareData = {
            title: productName,
            text: `Check out ${productName} on Uma Textiles!`,
            url: url,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error("Error sharing:", err);
            }
        } else {
            // Fallback to clipboard
            navigator.clipboard.writeText(url);
            toast.success("Link copied to clipboard!");
        }
    };

    const handleWhatsApp = () => {
        // Replace with actual phone number
        const phoneNumber = "919876543210";
        const text = encodeURIComponent(`Hi, I am interested in ${productName}. Can you provide more details? Link: ${window.location.href}`);
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    };

    return (
        <div className="flex gap-4">
            <Button size="lg" className="flex-1 md:flex-none gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                Enquire on WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="flex-1 md:flex-none gap-2" onClick={handleShare}>
                <Share2 className="h-5 w-5" />
                Share
            </Button>
        </div>
    );
}
