import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = products.filter(p => p.stock > 0).slice(0, 3);

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

      {/* Top Brands / Featured Collections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-serif font-bold">Exquisite Weaves</h2>
            <p className="text-muted-foreground">Explore our signature collections</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Kanjivaram", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop" },
              { name: "Banarasi", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop" },
              { name: "Designer", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800&auto=format&fit=crop" },
              { name: "Handloom", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" }
            ].map((brand) => (
              <Link key={brand.name} href="/products" className="group relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-serif font-bold text-white tracking-wider">
                    {brand.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-serif font-bold">Trending Now</h2>
            <p className="text-muted-foreground">What everyone is loving right now</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.filter(p => p.tags?.includes('trending') && p.stock > 0).slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-serif font-bold">Best Sellers</h2>
            <p className="text-muted-foreground">Our most loved pieces</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {products.filter(p => p.tags?.includes('bestseller') && p.stock > 0).slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Collection */}
      <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop"
            alt="Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-100">The Royal Collection</h2>
            <p className="text-amber-100/80 max-w-2xl mx-auto text-lg">
              Handpicked masterpieces for the connoisseur. Experience luxury like never before.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => p.tags?.includes('premium') && p.stock > 0).slice(0, 3).map((product) => (
              <div key={product.id} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-amber-200/30 transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-serif font-medium text-amber-50">{product.name}</h3>
                  <p className="text-amber-200/90 font-semibold">{product.price}</p>
                  <Button variant="outline" className="w-full border-amber-200/30 text-amber-100 hover:bg-amber-900/50 hover:text-amber-50 hover:border-amber-200/50 bg-white/10 backdrop-blur-sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
