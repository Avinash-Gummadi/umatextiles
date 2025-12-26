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
    colorImages?: Record<string, string>;
    fabric: string;
    outOfStockColors?: string[];
}

export const products: Product[] = [
    // Sarees
    {
        id: "saree-01",
        name: "Soft Silk Saree",
        price: "₹1,499",
        discountPrice: "₹1,199",
        image: "/assets/rajShreeSilk_deep_purple.png",
        description: "Premium soft silk saree with rich pallu and blouse. Perfect for weddings and special occasions.",
        category: "Sarees",
        stock: 15,
        tags: ["bestseller", "trending"],
        color: ["Blue", "Mulberry Purple", "Green", "Teal Green", "Violet", "Teal Blue", "Thick Green", "Rani Magenta"],
        outOfStockColors: ["Red"],
        colorImages: {
            "Blue": "/assets/rajShreeSilk_Blue.png",
            "Mulberry Purple": "/assets/rajShreeSilk_Mulberry_Purple.png",
            "Green": "/assets/rajShreeSilk_Green.png",
            "Teal Green": "/assets/rajShreeSilk_TealGreen.png",
            "Violet": "/assets/rajShreeSilk_Violet.png",
            "Teal Blue": "/assets/rajShreeSilk_TealBlue.png",
            "Thick Green": "/assets/rajShreeSilk_ThickGreen.png",
            "Rani Magenta": "/assets/rajShreeSilk_RaniMagenta.png"
        },
        fabric: "Soft Silk"
    },
    {
        id: "saree-02",
        name: "Marble Fancy",
        price: "₹1,200",
        discountPrice: "₹1,075",
        image: "/assets/rajYog_baby_pink.png",
        description: "Marble fancy with intricate gold zari work.",
        category: "Sarees",
        stock: 8,
        tags: ["premium", "wedding"],
        color: ["Pink", "Green", "Blue", "Purple", "Brown"],
        colorImages: {
            "Pink": "/assets/rajYog_baby_pink.png",
            "Green": "/assets/rajYog_green.png",
            "Blue": "/assets/rajYog_blue.png",
            "Purple": "/assets/rajYog_purple.png",
            "Brown": "/assets/rajYog_brown.png"
        },
        fabric: "Kanjivaram Silk"
    },
    {
        id: "dress-01",
        name: "Fancy Silk Saree",
        price: "₹1,899",
        discountPrice: "0",
        image: "/assets/durga_brown.png",
        description: "Elegant Fancy Silk Saree",
        category: "Sarees",
        stock: 20,
        tags: ["trending"],
        color: ["Brown", "Blue", "Purple", "Emerald Green"],
        colorImages: {
            "Brown": "/assets/durga_brown.png",
            "Blue": "/assets/durga_blue.png",
            "Purple": "/assets/durga_purple.png",
            "Emerald Green": "/assets/durga_emeraldgreen.png"
        },
        fabric: "Fancy Silk"
    },
    {
        id: "saree-03",
        name: "Festive Lenin Fancy Saree",
        price: "₹1,199",
        discountPrice: "₹899",
        image: "/assets/linensimer_blue.png",
        description: "Festive Lenin Fancy Saree",
        category: "Sarees",
        stock: 12,
        tags: ["bestseller"],
        color: ["Brown", "Violet", "Multicolor", "sky blue", "Maroon"],
        colorImages: {
            "Brown": "/assets/linensimer_brown.png",
            "Violet": "/assets/linensimer_violet.png",
            "Multicolor": "/assets/linensimer_multicolor.png",
            "sky blue": "/assets/linensimer_skyblue.png",
            "Maroon": "/assets/linensimer_maroon.png"
        },
        fabric: "Silk Blend"
    },
    {
        id: "saree-04",
        name: "Fancy Saree – Yellow",
        price: "₹899",
        discountPrice: "₹699",
        image: "/assets/fancySaree_yellow.png",
        description: "Ready-made designer blouse with sequin work.",
        category: "Sarees",
        stock: 25,
        tags: ["trending", "party"],
        color: ["Yellow"],
        colorImages: {
            "Yellow": "/assets/fancySaree_yellow.png"
        },
        fabric: "Silk"
    },
    {
        id: "saree-05",
        name: "Fancy Saree – Green",
        price: "₹3,499",
        discountPrice: "₹2,799",
        image: "/assets/fancySaree_green.png",
        description: "Lightweight Fancy Saree in a vibrant green shade.",
        category: "Sarees",
        stock: 10,
        tags: ["premium"],
        color: ["Green"],
        colorImages: {
            "Green": "/assets/fancySaree_green.png"
        },
        fabric: "Fancy"
    },
    {
        id: "saree-06",
        name: "Fancy Saree",
        price: "₹3,199",
        discountPrice: "0",
        image: "/assets/lovebite_green.png",
        description: "Classic Fancy Saree",
        category: "Sarees",
        stock: 18,
        tags: ["bestseller"],
        color: ["Green", "Sky Blue", "Purple", "Blue"],
        colorImages: {
            "Green": "/assets/lovebite_green.png",
            "Sky Blue": "/assets/lovebite_skyblue.png",
            "Purple": "/assets/lovebite_purple.png",
            "Blue": "/assets/lovebite_blue.png"
        },
        fabric: "Fancy"
    },
    {
        id: "saree-07",
        name: "Cotton Saree – Teal Green",
        price: "₹1,499",
        discountPrice: "₹1,199",
        image: "/assets/cottonSaree_tealGreen.png",
        description: "Comfortable cotton saree perfect for daily wear.",
        category: "Sarees",
        stock: 30,
        tags: ["trending", "party"],
        color: ["Teal Green"],
        colorImages: {
            "Teal Green": "/assets/cottonSaree_tealGreen.png"
        },
        fabric: "Cotton"
    },
    {
        id: "saree-08",
        name: "Soft Silk Designer Saree – Green",
        price: "₹4,499",
        discountPrice: "₹3,999",
        image: "/assets/softSilkDesigner_green.png",
        description: "Elegant Soft Silk Designer Saree with tribal art prints.",
        category: "Sarees",
        stock: 5,
        tags: ["premium"],
        color: ["Green"],
        colorImages: {
            "Green": "/assets/softSilkDesigner_green.png"
        },
        fabric: "Soft Silk"
    },
    {
        id: "saree-09",
        name: "Fancy Saree – Blue",
        price: "₹1,799",
        discountPrice: "₹1,399",
        image: "/assets/fancySaree_blue.png",
        description: "Lightweight chiffon saree with floral prints.",
        category: "Sarees",
        stock: 28,
        tags: ["bestseller"],
        color: ["Blue"],
        colorImages: {
            "Blue": "/assets/fancySaree_blue.png"
        },
        fabric: "Fancy"
    },
    {
        id: "saree-10",
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
        id: "saree-11",
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
        id: "saree-12",
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
        id: "saree-13",
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
        id: "saree-14",
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
        id: "saree-15",
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
    },
    // Dress Materials
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
    // Kids Wear
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
    // Blouses
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
    }
];
