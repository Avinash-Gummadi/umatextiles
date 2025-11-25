export interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    description: string;
    category: string;
    stock: number;
    tags?: string[];
}

export const products: Product[] = [
    {
        id: "saree-01",
        name: "Soft Silk Saree – Pink",
        price: "₹2,499",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Premium soft silk saree with rich pallu. Perfect for weddings and special occasions.",
        category: "Sarees",
        stock: 15,
        tags: ["bestseller", "trending"]
    },
    {
        id: "saree-02",
        name: "Kanjivaram Silk – Gold",
        price: "₹5,999",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Authentic Kanjivaram silk saree with intricate gold zari work.",
        category: "Sarees",
        stock: 8,
        tags: ["premium", "wedding"]
    },
    {
        id: "dress-01",
        name: "Anarkali Suit – Blue",
        price: "₹1,899",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Elegant Anarkali suit with hand embroidery and matching dupatta.",
        category: "Dress Materials",
        stock: 20,
        tags: ["trending"]
    },
    {
        id: "kids-01",
        name: "Festive Lehenga – Red",
        price: "₹1,299",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Beautiful red lehenga for kids, comfortable and stylish.",
        category: "Kids Wear",
        stock: 12,
        tags: ["bestseller"]
    },
    {
        id: "blouse-01",
        name: "Designer Blouse – Black",
        price: "₹899",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1000&auto=format&fit=crop",
        description: "Ready-made designer blouse with sequin work.",
        category: "Blouses",
        stock: 25
    },
    {
        id: "saree-03",
        name: "Banarasi Georgette – Green",
        price: "₹3,499",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Lightweight Banarasi Georgette saree in a vibrant green shade.",
        category: "Sarees",
        stock: 10,
        tags: ["premium"]
    },
    {
        id: "saree-04",
        name: "Mysore Silk – Maroon",
        price: "₹3,199",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Classic Mysore silk saree with gold border.",
        category: "Sarees",
        stock: 18,
        tags: ["bestseller"]
    },
    {
        id: "saree-05",
        name: "Cotton Saree – Yellow",
        price: "₹1,499",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Comfortable cotton saree perfect for daily wear.",
        category: "Sarees",
        stock: 30
    },
    {
        id: "dress-02",
        name: "Churidar Set – Pink",
        price: "₹1,599",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Stylish churidar set with intricate patterns.",
        category: "Dress Materials",
        stock: 15,
        tags: ["trending"]
    },
    {
        id: "dress-03",
        name: "Palazzo Suit – Green",
        price: "₹2,199",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Trendy palazzo suit with modern design.",
        category: "Dress Materials",
        stock: 22
    },
    {
        id: "kids-02",
        name: "Boys Sherwani – Gold",
        price: "₹1,999",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Traditional sherwani for boys, ideal for weddings.",
        category: "Kids Wear",
        stock: 10,
        tags: ["premium", "wedding"]
    },
    {
        id: "kids-03",
        name: "Girls Frock – Blue",
        price: "₹999",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Cute and comfortable frock for girls.",
        category: "Kids Wear",
        stock: 35,
        tags: ["bestseller"]
    },
    {
        id: "blouse-02",
        name: "Embroidered Blouse – Gold",
        price: "₹1,199",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1000&auto=format&fit=crop",
        description: "Hand-embroidered blouse with golden threads.",
        category: "Blouses",
        stock: 14
    },
    {
        id: "blouse-03",
        name: "Sequin Blouse – Silver",
        price: "₹1,099",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1000&auto=format&fit=crop",
        description: "Sparkling sequin blouse for party wear.",
        category: "Blouses",
        stock: 20,
        tags: ["trending", "party"]
    },
    {
        id: "saree-06",
        name: "Tussar Silk – Beige",
        price: "₹4,499",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Elegant Tussar silk saree with tribal art prints.",
        category: "Sarees",
        stock: 5,
        tags: ["premium"]
    },
    {
        id: "saree-07",
        name: "Chiffon Saree – Red",
        price: "₹1,799",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Lightweight chiffon saree with floral prints.",
        category: "Sarees",
        stock: 28,
        tags: ["bestseller"]
    },
    // New Products
    {
        id: "saree-08",
        name: "Paithani Silk – Purple",
        price: "₹8,999",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Luxurious Paithani silk with peacock motifs.",
        category: "Sarees",
        stock: 3,
        tags: ["premium", "wedding"]
    },
    {
        id: "saree-09",
        name: "Organza Saree – Pastel",
        price: "₹2,299",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Trendy organza saree in pastel shades.",
        category: "Sarees",
        stock: 15,
        tags: ["trending"]
    },
    {
        id: "dress-04",
        name: "Velvet Suit – Maroon",
        price: "₹3,499",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Rich velvet suit perfect for winter weddings.",
        category: "Dress Materials",
        stock: 8,
        tags: ["premium", "winter"]
    },
    {
        id: "kids-04",
        name: "Girls Gown – Pink",
        price: "₹1,499",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Princess style gown for little girls.",
        category: "Kids Wear",
        stock: 20,
        tags: ["bestseller"]
    },
    {
        id: "saree-10",
        name: "Linen Saree – Grey",
        price: "₹1,899",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Sophisticated linen saree for office wear.",
        category: "Sarees",
        stock: 12
    },
    {
        id: "blouse-04",
        name: "Velvet Blouse – Navy",
        price: "₹999",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1000&auto=format&fit=crop",
        description: "Classic velvet blouse in navy blue.",
        category: "Blouses",
        stock: 18
    },
    {
        id: "saree-11",
        name: "Georgette Saree – Black",
        price: "₹2,199",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Stunning black georgette saree with embroidery.",
        category: "Sarees",
        stock: 10,
        tags: ["trending", "party"]
    },
    {
        id: "saree-12",
        name: "Kalamkari Cotton – Red",
        price: "₹1,299",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Traditional Kalamkari print on soft cotton.",
        category: "Sarees",
        stock: 25,
        tags: ["bestseller"]
    },
    {
        id: "dress-05",
        name: "Cotton Suit – White",
        price: "₹1,199",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Pure white cotton suit with chikankari work.",
        category: "Dress Materials",
        stock: 15,
        tags: ["bestseller"]
    },
    {
        id: "saree-13",
        name: "Patola Silk – Multi",
        price: "₹12,999",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Exquisite double ikat Patola silk saree.",
        category: "Sarees",
        stock: 2,
        tags: ["premium", "heirloom"]
    }
];
