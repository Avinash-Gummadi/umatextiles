import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12 px-4 md:px-6">
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-serif font-bold text-primary">
                        Uma Textiles &amp; Fancy
                    </span>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        Premium clothing for every occasion. Tradition meets elegance.
                    </p>
                </div>

                <div className="flex gap-8 text-sm text-muted-foreground">
                    <Link href="/products" className="hover:text-primary transition-colors">
                        Collection
                    </Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">
                        Contact
                    </Link>
                    <Link href="#" className="hover:text-primary transition-colors">
                        Privacy
                    </Link>
                </div>

                <div className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Uma Textiles. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
