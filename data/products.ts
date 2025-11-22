export interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    description: string;
    category: string;
}

export const products: Product[] = [
    {
        id: "saree-01",
        name: "Soft Silk Saree – Pink",
        price: "₹2,499",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Premium soft silk saree with rich pallu. Perfect for weddings and special occasions.",
        category: "Sarees"
    },
    {
        id: "saree-02",
        name: "Kanjivaram Silk – Gold",
        price: "₹5,999",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Authentic Kanjivaram silk saree with intricate gold zari work.",
        category: "Sarees"
    },
    {
        id: "dress-01",
        name: "Anarkali Suit – Blue",
        price: "₹1,899",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Elegant Anarkali suit with hand embroidery and matching dupatta.",
        category: "Dress Materials"
    },
    {
        id: "kids-01",
        name: "Festive Lehenga – Red",
        price: "₹1,299",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Beautiful red lehenga for kids, comfortable and stylish.",
        category: "Kids Wear"
    },
    {
        id: "blouse-01",
        name: "Designer Blouse – Black",
        price: "₹899",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1000&auto=format&fit=crop",
        description: "Ready-made designer blouse with sequin work.",
        category: "Blouses"
    },
    {
        id: "saree-03",
        name: "Banarasi Georgette – Green",
        price: "₹3,499",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Lightweight Banarasi Georgette saree in a vibrant green shade.",
        category: "Sarees"
    }
];
