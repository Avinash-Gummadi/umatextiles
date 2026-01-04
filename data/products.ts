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
        image: "/assets/rajShreeSilk_Violet.png",
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
        id: "saree-03",
        name: "Festive Lenin Fancy Saree",
        price: "₹1,199",
        discountPrice: "₹899",
        image: "/assets/linensimer_multicolor.png",
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
        name: "Fancy Designer Saree – Yellow",
        price: "₹8,999",
        discountPrice: "₹7,499",
        image: "/assets/fancyDesigner_yellow.png",
        description: "Luxurious Paithani silk with peacock motifs.",
        category: "Sarees",
        stock: 3,
        tags: ["premium", "wedding"],
        color: ["Yellow"],
        fabric: "Paithani Silk"
    },
    {
        id: "saree-11",
        name: "Fancy Saree – Blue",
        price: "₹2,299",
        discountPrice: "0",
        image: "/assets/fancySaree_thickblue.png",
        description: "Trendy organza saree in pastel shades.",
        category: "Sarees",
        stock: 15,
        tags: ["trending"],
        color: ["Blue"],
        fabric: "Organza"
    },
    {
        id: "saree-12",
        name: "Silk Saree – Red",
        price: "₹1,899",
        discountPrice: "₹1,499",
        image: "/assets/silkSaree_red.png",
        description: "Sophisticated Silk saree for office wear.",
        category: "Sarees",
        stock: 12,
        color: ["Red"],
        fabric: "Silk"
    },
    {
        id: "saree-13",
        name: "Fancy Saree – Brown",
        price: "₹2,199",
        discountPrice: "₹1,799",
        image: "/assets/fancySaree_brown.png",
        description: "Stunning brown georgette saree with embroidery.",
        category: "Sarees",
        stock: 10,
        tags: ["trending", "party"],
        color: ["Brown"],
        fabric: "Georgette"
    },
    {
        id: "saree-14",
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
    // Dress Materials
    {
        id: "dress-01",
        name: "Cotton Dress Material",
        price: "₹1,599",
        discountPrice: "₹1,299",
        image: "/assets/dressMaterialCotton_black.png",
        description: "Stylish cotton dress material with intricate patterns.",
        category: "Dresses",
        stock: 15,
        tags: ["trending"],
        color: ["Black", "Brown"],
        colorImages: {
            "Black": "/assets/dressMaterialCotton_black.png",
            "Brown": "/assets/dressMaterialCotton_brown.png"
        },
        fabric: "Cotton"
    },
    {
        id: "dress-02",
        name: "Jeans Top – Purple",
        price: "₹2,199",
        discountPrice: "0",
        image: "/assets/jeansTop_purple.png",
        description: "Stylish cotton dress  with intricate patterns.",
        category: "Dresses",
        stock: 22,
        tags: ["bestseller"],
        color: ["Purple"],
        fabric: "Cotton"
    },
    {
        id: "dress-03",
        name: "Jeans Top – Orange",
        price: "₹2,199",
        discountPrice: "0",
        image: "/assets/jeansTop_orange.png",
        description: "Stylish cotton dress  with intricate patterns.",
        category: "Dresses",
        stock: 8,
        
        color: ["Orange"],
        fabric: "Cotton"
    },
    {
        id: "dress-04",
        name: "Kurthi Set",
        price: "₹1,199",
        discountPrice: "₹899",
        image: "/assets/kurthiSet3Piece_purple.png",
        description: "Stylish Kurthi 3 Piece Set with intricate patterns.",
        category: "Dresses",
        stock: 15,
        tags: ["trending"],
        color: ["Purple", "Brown", "Grey", "Pink"],
        colorImages: {
            "Purple": "/assets/kurthiSet3Piece_purple.png",
            "Brown": "/assets/kurthiSet3Piece_brown.png",
            "Grey": "/assets/kurthiSet3Piece_grey.png",
            "Pink": "/assets/kurthiSet3Piece_pink.png"
        },
        fabric: "Cotton"
    },
];
