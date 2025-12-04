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
            console.log("Share is supported");
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error("Error sharing:", err);
            }
        } else {
            console.log("Share is not supported");
            // Fallback to clipboard
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url).then(() => {
                    toast.success("Link copied to clipboard!");
                }).catch((err) => {
                    console.error("Failed to copy: ", err);
                    toast.error("Failed to copy link");
                });
            } else {
                // Fallback for insecure contexts
                try {
                    const textArea = document.createElement("textarea");
                    textArea.value = url;
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
        }
    };

    const handleWhatsApp = () => {
        // Replace with actual phone number
        const phoneNumber = "919876543210";
        const text = encodeURIComponent(`Hi, I am interested in ${productName}. Can you provide more details? Link: ${window.location.href}`);
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex gap-4 md:static md:p-0 md:bg-transparent md:border-none md:shadow-none">
            <Button size="lg" className="flex-1 md:flex-none gap-2 bg-[rgb(0,166,153)] hover:bg-[rgb(0,136,125)] text-white" onClick={handleWhatsApp}>
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
