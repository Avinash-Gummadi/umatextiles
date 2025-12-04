export interface Product {
    id: string;
    name: string;
    price: string;
    discountPrice?: string;
    image: string;
    description: string;
    category: string;
    stock: number;
    tags?: string[];
    color: string[];
    fabric: string;
}

export const products: Product[] = [
    {
        id: "saree-01",
        name: "Soft Silk Saree – Pink",
        price: "₹2,499",
        discountPrice: "₹1,999",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Premium soft silk saree with rich pallu. Perfect for weddings and special occasions.",
        category: "Sarees",
        stock: 15,
        tags: ["bestseller", "trending"],
        color: ["Pink", "Blue", "Green", "Yellow", "Black", "White"],
        fabric: "Soft Silk"
    },
    {
        id: "saree-02",
        name: "Kanjivaram Silk – Gold",
        price: "₹5,999",
        discountPrice: "₹4,499",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Authentic Kanjivaram silk saree with intricate gold zari work.",
        category: "Sarees",
        stock: 8,
        tags: ["premium", "wedding"],
        color: ["Gold"],
        fabric: "Kanjivaram Silk"
    },
    {
        id: "dress-01",
        name: "Anarkali Suit – Blue",
        price: "₹1,899",
        discountPrice: "0",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Elegant Anarkali suit with hand embroidery and matching dupatta.",
        category: "Dress Materials",
        stock: 20,
        tags: ["trending"],
        color: ["Blue"],
        fabric: "Cotton Silk"
    },
    {
        id: "kids-01",
        name: "Festive Lehenga – Red",
        price: "₹1,299",
        discountPrice: "₹999",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Beautiful red lehenga for kids, comfortable and stylish.",
        category: "Kids Wear",
        stock: 12,
        tags: ["bestseller"],
        color: ["Red", "Blue", "Green", "Yellow", "Black", "White"],
        fabric: "Silk Blend"
    },
    {
        id: "blouse-01",
        name: "Designer Blouse – Black",
        price: "₹899",
        discountPrice: "₹699",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1000&auto=format&fit=crop",
        description: "Ready-made designer blouse with sequin work.",
        category: "Blouses",
        stock: 25,
        color: ["Black"],
        fabric: "Silk"
    },
    {
        id: "saree-03",
        name: "Banarasi Georgette – Green",
        price: "₹3,499",
        discountPrice: "₹2,799",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Lightweight Banarasi Georgette saree in a vibrant green shade.",
        category: "Sarees",
        stock: 10,
        tags: ["premium"],
        color: ["Green", "Red", "Blue", "Yellow"],
        fabric: "Banarasi Georgette"
    },
    {
        id: "saree-04",
        name: "Mysore Silk – Maroon",
        price: "₹3,199",
        discountPrice: "0",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Classic Mysore silk saree with gold border.",
        category: "Sarees",
        stock: 18,
        tags: ["bestseller"],
        color: ["Maroon", "Black", "White"],
        fabric: "Mysore Silk"
    },
    {
        id: "saree-05",
        name: "Cotton Saree – Yellow",
        price: "₹1,499",
        discountPrice: "₹1,199",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Comfortable cotton saree perfect for daily wear.",
        category: "Sarees",
        stock: 30,
        color: ["Yellow"],
        fabric: "Cotton"
    },
    {
        id: "dress-02",
        name: "Churidar Set – Pink",
        price: "₹1,599",
        discountPrice: "₹1,299",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Stylish churidar set with intricate patterns.",
        category: "Dress Materials",
        stock: 15,
        tags: ["trending"],
        color: ["Pink"],
        fabric: "Cotton"
    },
    {
        id: "dress-03",
        name: "Palazzo Suit – Green",
        price: "₹2,199",
        discountPrice: "0",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Trendy palazzo suit with modern design.",
        category: "Dress Materials",
        stock: 22,
        color: ["Green"],
        fabric: "Georgette"
    },
    {
        id: "kids-02",
        name: "Boys Sherwani – Gold",
        price: "₹1,999",
        discountPrice: "₹1,499",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Traditional sherwani for boys, ideal for weddings.",
        category: "Kids Wear",
        stock: 10,
        tags: ["premium", "wedding"],
        color: ["Gold"],
        fabric: "Silk"
    },
    {
        id: "kids-03",
        name: "Girls Frock – Blue",
        price: "₹999",
        discountPrice: "₹799",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Cute and comfortable frock for girls.",
        category: "Kids Wear",
        stock: 35,
        tags: ["bestseller"],
        color: ["Blue"],
        fabric: "Cotton"
    },
    {
        id: "blouse-02",
        name: "Embroidered Blouse – Gold",
        price: "₹1,199",
        discountPrice: "₹899",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1000&auto=format&fit=crop",
        description: "Hand-embroidered blouse with golden threads.",
        category: "Blouses",
        stock: 14,
        color: ["Gold"],
        fabric: "Silk"
    },
    {
        id: "blouse-03",
        name: "Sequin Blouse – Silver",
        price: "₹1,099",
        discountPrice: "0",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1000&auto=format&fit=crop",
        description: "Sparkling sequin blouse for party wear.",
        category: "Blouses",
        stock: 20,
        tags: ["trending", "party"],
        color: ["Silver", "Gold", "Black"],
        fabric: "Georgette"
    },
    {
        id: "saree-06",
        name: "Tussar Silk – Beige",
        price: "₹4,499",
        discountPrice: "₹3,999",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Elegant Tussar silk saree with tribal art prints.",
        category: "Sarees",
        stock: 5,
        tags: ["premium"],
        color: ["Beige", "White", "Black"],
        fabric: "Tussar Silk"
    },
    {
        id: "saree-07",
        name: "Chiffon Saree – Red",
        price: "₹1,799",
        discountPrice: "₹1,399",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Lightweight chiffon saree with floral prints.",
        category: "Sarees",
        stock: 28,
        tags: ["bestseller"],
        color: ["Red", "Black"],
        fabric: "Chiffon"
    },
    // New Products
    {
        id: "saree-08",
        name: "Paithani Silk – Purple",
        price: "₹8,999",
        discountPrice: "₹7,499",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Luxurious Paithani silk with peacock motifs.",
        category: "Sarees",
        stock: 3,
        tags: ["premium", "wedding"],
        color: ["Purple", "Leaf Green"],
        fabric: "Paithani Silk"
    },
    {
        id: "saree-09",
        name: "Organza Saree – Pastel",
        price: "₹2,299",
        discountPrice: "0",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Trendy organza saree in pastel shades.",
        category: "Sarees",
        stock: 15,
        tags: ["trending"],
        color: ["Pink", "Peach", "Blue"],
        fabric: "Organza"
    },
    {
        id: "dress-04",
        name: "Velvet Suit – Maroon",
        price: "₹3,499",
        discountPrice: "₹2,999",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Rich velvet suit perfect for winter weddings.",
        category: "Dress Materials",
        stock: 8,
        tags: ["premium", "winter"],
        color: ["Maroon", "Saffron"],
        fabric: "Velvet"
    },
    {
        id: "kids-04",
        name: "Girls Gown – Pink",
        price: "₹1,499",
        discountPrice: "₹1,199",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Princess style gown for little girls.",
        category: "Kids Wear",
        stock: 20,
        tags: ["bestseller"],
        color: ["Pink", "Red", "Blue", "Green", "Yellow", "Orange", "Violet"],
        fabric: "Satin"
    },
    {
        id: "saree-10",
        name: "Linen Saree – Grey",
        price: "₹1,899",
        discountPrice: "₹1,499",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Sophisticated linen saree for office wear.",
        category: "Sarees",
        stock: 12,
        color: ["Grey", "Red"],
        fabric: "Linen"
    },
    {
        id: "blouse-04",
        name: "Velvet Blouse – Navy",
        price: "₹999",
        discountPrice: "0",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1000&auto=format&fit=crop",
        description: "Classic velvet blouse in navy blue.",
        category: "Blouses",
        stock: 18,
        color: ["Navy Blue", "Grey", "Golden Yellow", "Pink"],
        fabric: "Velvet"
    },
    {
        id: "saree-11",
        name: "Georgette Saree – Black",
        price: "₹2,199",
        discountPrice: "₹1,799",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Stunning black georgette saree with embroidery.",
        category: "Sarees",
        stock: 10,
        tags: ["trending", "party"],
        color: ["Black", "White", "Blue", "Green", "Red", "Yellow", "Orange", "Violet"],
        fabric: "Georgette"
    },
    {
        id: "saree-12",
        name: "Kalamkari Cotton – Red",
        price: "₹1,299",
        discountPrice: "₹999",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
        description: "Traditional Kalamkari print on soft cotton.",
        category: "Sarees",
        stock: 25,
        tags: ["bestseller"],
        color: ["Red", "Violet", "Orange", "Yellow"],
        fabric: "Cotton"
    },
    {
        id: "dress-05",
        name: "Cotton Suit – White",
        price: "₹1,199",
        discountPrice: "₹899",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Pure white cotton suit with chikankari work.",
        category: "Dress Materials",
        stock: 15,
        tags: ["bestseller"],
        color: ["White", "Black", "Blue"],
        fabric: "Cotton"
    },
    {
        id: "saree-13",
        name: "Patola Silk – Multi",
        price: "₹12,999",
        discountPrice: "₹10,999",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
        description: "Exquisite double ikat Patola silk saree.",
        category: "Sarees",
        stock: 2,
        tags: ["premium", "heirloom"],
        color: ["Red", "Green", "Blue"],
        fabric: "Patola Silk"
    }
];
