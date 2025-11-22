import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-muted text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover opacity-90 brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 container px-4 md:px-6 space-y-6 max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Elegance Woven in Every Thread
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Discover our premium collection of Sarees, Dress Materials, and Kids Wear.
            Tradition meets modern sophistication at Uma Textiles.
          </p>
          <div className="pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
              <Link href="/products">
                Shop Collection
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-serif font-bold">Shop by Category</h2>
            <p className="text-muted-foreground">Curated collections for every occasion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" },
              { name: "Dress Materials", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop" },
              { name: "Kids Wear", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop" }
            ].map((cat) => (
              <Link key={cat.name} href="/products" className="group relative overflow-hidden rounded-lg aspect-[4/5]">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-serif font-bold text-white tracking-wide border-b-2 border-transparent group-hover:border-white transition-all">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-1">
              <h2 className="text-3xl font-serif font-bold">New Arrivals</h2>
              <p className="text-muted-foreground">Latest additions to our collection</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex gap-2">
              <Link href="/products">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
