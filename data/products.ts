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
        name: "Rajshree Soft Silk Saree",
        price: "₹1,499",
        discountPrice: "₹1,199",
        image: "/assets/rajShreeSilk_Violet.png",
        description: "Experience the elegance of our bestseller Rajshree Soft Silk Saree. Woven from premium Soft Silk, it features a rich pallu and comes with a blouse, making it a trending choice perfect for weddings and special occasions.",
        category: "Sarees",
        stock: 3,
        tags: ["bestseller", "trending"],
        color: ["Blue", "Mulberry Purple", "Green", "Teal Green", "Violet", "Teal Blue", "Thick Green", "Rani Magenta"],
        outOfStockColors: ["Blue", "Mulberry Purple", "Teal Green", "Violet", "Rani Magenta"],
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
        price: "₹1,400",
        discountPrice: "₹1,200",
        image: "/assets/rajYog_baby_pink.png",
        description: "Exquisite Marble Fancy saree featuring intricate gold zari work. Crafted from high-quality Marble fabric, this premium saree is an ideal choice for weddings and festive celebrations.",
        category: "Sarees",
        stock: 4,
        tags: ["premium", "wedding"],
        color: ["Pink", "Green", "Blue", "Purple", "Brown"],
        outOfStockColors: ["Blue", "Pink", "Purple", "Brown"],
        colorImages: {
            "Pink": "/assets/rajYog_baby_pink.png",
            "Green": "/assets/rajYog_green.png",
            "Blue": "/assets/rajYog_blue.png",
            "Purple": "/assets/rajYog_purple.png",
            "Brown": "/assets/rajYog_brown.png"
        },
        fabric: "Marble"
    },
    {
        id: "saree-03",
        name: "Festive Lenin Fancy Saree",
        price: "₹1,299",
        discountPrice: "₹1100",
        image: "/assets/linensimer_multicolor.png",
        description: "Celebrate in style with our bestseller Festive Lenin Fancy Saree. Made from breathable Lenin fabric, this saree combines comfort with festive elegance, perfect for any gathering.",
        category: "Sarees",
        stock: 3,
        tags: ["bestseller"],
        color: ["Brown", "Violet", "Multicolor", "Blue", "Maroon"],
        outOfStockColors: ["Brown", "Multicolor"],
        colorImages: {
            "Brown": "/assets/linensimer_brown.png",
            "Violet": "/assets/linensimer_violet.png",
            "Multicolor": "/assets/linensimer_multicolor.png",
            "Blue": "/assets/linensimer_skyblue.png",
            "Maroon": "/assets/linensimer_maroon.png"
        },
        fabric: "Lenin"
    },
    {
        id: "saree-04",
        name: "Georgette Fancy Saree",
        price: "₹1199",
        discountPrice: "₹999",
        image: "/assets/georgette_fancySaree_yellow.png",
        description: "Step out in style with this trending Georgette Fancy Saree. Featuring a ready-made designer blouse with sequin work, this Silk-based saree is perfect for parties and making a statement.",
        category: "Sarees",
        stock: 3,
        tags: ["trending", "party"],
        color: ["Yellow", "Green", "Red"],
        colorImages: {
            "Yellow": "/assets/georgette_fancySaree_yellow.png",
            "Green": "/assets/georgette_fancySaree_green.png",
            "Red": "/assets/georgette_fancySaree_red.png"
        },
        fabric: "Silk"
    },
    // {
    //     id: "saree-05",
    //     name: "Fancy Saree – Green",
    //     price: "₹3,499",
    //     discountPrice: "₹2,799",
    //     image: "/assets/fancySaree_green.png",
    //     description: "Lightweight Fancy Saree in a vibrant green shade.",
    //     category: "Sarees",
    //     stock: 10,
    //     tags: ["premium"],
    //     color: ["Green"],
    //     colorImages: {
    //         "Green": "/assets/fancySaree_green.png"
    //     },
    //     fabric: "Fancy"
    // },
    {
        id: "saree-05",
        name: "Fancy Saree",
        price: "₹1,500",
        discountPrice: "₹1,199",
        image: "/assets/lovebite_green.png",
        description: "Discover the charm of our bestseller Fancy Saree. Crafted from delicate Fancy fabric, this classic piece offers a timeless look suitable for various occasions.",
        category: "Sarees",
        stock: 4,
        tags: ["bestseller"],
        color: ["Green", "Sky Blue", "Purple", "Blue"],
        outOfStockColors: ["Green", "Sky Blue"],
        colorImages: {
            "Green": "/assets/lovebite_green.png",
            "Sky Blue": "/assets/lovebite_skyblue.png",
            "Purple": "/assets/lovebite_purple.png",
            "Blue": "/assets/lovebite_blue.png"
        },
        fabric: "Fancy"
    },
    {
        id: "saree-06",
        name: "Jute Georgette Saree",
        price: "₹1,599",
        discountPrice: "₹1,399",
        image: "/assets/jutegeorgette_tealGreen.png",
        description: "Elevate your party look with this trending Jute Georgette Saree. Made from lightweight Jute Georgette, it blends comfort with style, making it a perfect choice for modern ethnic wear.",
        category: "Sarees",
        stock: 2,
        tags: ["trending", "party"],
        color: ["Teal Green", "Yellow", "Blue", "Maroon"],
        outOfStockColors: ["Teal Green", "Yellow", "Blue", "Maroon"],
        colorImages: {
            "Teal Green": "/assets/jutegeorgette_tealGreen.png",
            "Yellow": "/assets/jutegeorgette_yellow.png",
            "Blue": "/assets/jutegeorgette_thickblue.png",
            "Maroon": "/assets/jutegeorgette_maroon.png"
        },
        fabric: "Jute Georgette"
    },
    // {
    //     id: "saree-07",
    //     name: "Soft Silk Designer Saree – Green",
    //     price: "₹4,499",
    //     discountPrice: "₹3,999",
    //     image: "/assets/softSilkDesigner_green.png",
    //     description: "Elegant Soft Silk Designer Saree with tribal art prints.",
    //     category: "Sarees",
    //     stock: 5,
    //     tags: ["premium"],
    //     color: ["Green"],
    //     colorImages: {
    //         "Green": "/assets/softSilkDesigner_green.png"
    //     },
    //     fabric: "Soft Silk"
    // },
    {
        id: "saree-07",
        name: "Fancy Saree – Blue",
        price: "₹1,399",
        discountPrice: "₹999",
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
    // {
    //     id: "saree-10",
    //     name: "Fancy Designer Saree – Yellow",
    //     price: "₹8,999",
    //     discountPrice: "₹7,499",
    //     image: "/assets/fancyDesigner_yellow.png",
    //     description: "Luxurious Paithani silk with peacock motifs.",
    //     category: "Sarees",
    //     stock: 3,
    //     tags: ["premium", "wedding"],
    //     color: ["Yellow"],
    //     fabric: "Paithani Silk"
    // },
    // {
    //     id: "saree-11",
    //     name: "Fancy Saree – Blue",
    //     price: "₹2,299",
    //     discountPrice: "0",
    //     image: "/assets/fancySaree_thickblue.png",
    //     description: "Trendy organza saree in pastel shades.",
    //     category: "Sarees",
    //     stock: 15,
    //     tags: ["trending"],
    //     color: ["Blue"],
    //     fabric: "Organza"
    // },
    // {
    //     id: "saree-12",
    //     name: "Silk Saree – Red",
    //     price: "₹1,899",
    //     discountPrice: "₹1,499",
    //     image: "/assets/silkSaree_red.png",
    //     description: "Sophisticated Silk saree for office wear.",
    //     category: "Sarees",
    //     stock: 12,
    //     color: ["Red"],
    //     fabric: "Silk"
    // },
    // {
    //     id: "saree-13",
    //     name: "Fancy Saree – Brown",
    //     price: "₹2,199",
    //     discountPrice: "₹1,799",
    //     image: "/assets/fancySaree_brown.png",
    //     description: "Stunning brown georgette saree with embroidery.",
    //     category: "Sarees",
    //     stock: 10,
    //     tags: ["trending", "party"],
    //     color: ["Brown"],
    //     fabric: "Georgette"
    // },
    {
        id: "saree-08",
        name: "Dola Silk Saree",
        price: "₹1,099",
        discountPrice: "₹850",
        image: "/assets/durga_brown.png",
        description: "Elegant Dola Silk Saree",
        category: "Sarees",
        stock: 4,
        tags: ["trending"],
        color: ["Brown", "Green", "Blue", "Purple", "Emerald Green"],
        outOfStockColors: ["Brown", "Blue", "Purple"],
        colorImages: {
            "Brown": "/assets/durga_brown.png",
            "Green": "/assets/durga_green.png",
            "Blue": "/assets/durga_blue.png",
            "Purple": "/assets/durga_purple.png",
            "Emerald Green": "/assets/durga_emeraldgreen.png",
        },
        fabric: "Dola Silk"
    },
    // Dress Materials
    {
        id: "dress-01",
        name: "Cotton Dress Material",
        price: "₹1,100",
        discountPrice: "₹950",
        image: "/assets/dressMaterialCotton_black.png",
        description: "Stylish pure cotton dress material with intricate patterns.",
        category: "Dresses",
        stock: 2,
        tags: ["trending"],
        color: ["Black", "Brown"],
        outOfStockColors: ["Black", "Brown"],
        colorImages: {
            "Black": "/assets/dressMaterialCotton_black.png",
            "Brown": "/assets/dressMaterialCotton_brown.png"
        },
        fabric: "Cotton"
    },
    {
        id: "dress-02",
        name: "Jeans Top",
        price: "₹999",
        discountPrice: "₹670",
        image: "/assets/jeansTop_purple.png",
        description: "Stylish cotton dress  with intricate patterns.",
        category: "Dresses",
        stock: 3,
        tags: ["bestseller"],
        color: ["Purple", "Orange"],
        outOfStockColors: [],
        colorImages: {
            "Purple": "/assets/jeansTop_purple.png",
            "Orange": "/assets/jeansTop_orange.png"
        },
        fabric: "Cotton"
    },
    // {
    //     id: "dress-03",
    //     name: "Jeans Top – Orange",
    //     price: "₹2,199",
    //     discountPrice: "0",
    //     image: "/assets/jeansTop_orange.png",
    //     description: "Stylish cotton dress  with intricate patterns.",
    //     category: "Dresses",
    //     stock: 8,

    //     color: ["Orange"],
    //     fabric: "Cotton"
    // },
    {
        id: "dress-03",
        name: "Kurthi Set",
        price: "₹1,400",
        discountPrice: "₹1,200",
        image: "/assets/kurthiSet3Piece_purple.png",
        description: "Stylish Kurthi 3 Piece Set with intricate patterns.",
        category: "Dresses",
        stock: 4,
        tags: ["trending"],
        color: ["Purple", "Brown", "Grey", "Pink"],
        outOfStockColors: ["Purple", "Brown", "Pink"],
        colorImages: {
            "Purple": "/assets/kurthiSet3Piece_purple.png",
            "Brown": "/assets/kurthiSet3Piece_brown.png",
            "Grey": "/assets/kurthiSet3Piece_grey.png",
            "Pink": "/assets/kurthiSet3Piece_pink.png"
        },
        fabric: "Cotton"
    },
];
