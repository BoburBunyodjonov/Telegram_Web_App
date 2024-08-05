
interface categoriesArrType {
    id?: number;
    name?: string;
    img?: string;
    category_type?: string;
    products?: ProductType[];
}

interface ProductListProps {
    products: ProductType[];
  }




interface ProductType {
    product_id?: number;
    title?: string;
    price?: number;
    sale?: boolean;
    currency?: string;
    discount?: boolean;
    discount_percent?: number;
    size?: (string | number)[];
    color?: string[];
    gender?: string;
    description?: string;
    product_img?: string[];
    pre_orders?: boolean;
    bestsellers?: boolean;
    category?: string;
    quantity?: number;
}


export interface CategoriesType {
    id: number;
    category_type: string;
    name: string;
    img: string;
    products: ProductType[]; 
  }

  export interface CategoryType {
    id: number;
    category_type: string;
    name: string;
    img: string;
    products: ProductType[];
  }


export const categoriesArr: CategoryType[] = [
    {
        id: 1,
        category_type: 't-shirt',
        name: 'Одежда',
        img: "https://humo.fra1.cdn.digitaloceanspaces.com/magicbot/humodemo/categories/eU2RnQZfqvPJMTxYbEcRNY1tB2D3uWnyUgwHrpKq.png",
        products: [
            {
                product_id:1,
                title: "Minipicco Кеды Heather",
                price: 329000,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 8,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'furniture'

            },
            {
                product_id:2,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png", "https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:3,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png", "https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:4,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:5,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:6,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            }
            
        ] 
    },
    {
        id: 2,
        category_type: 'shoes',
        name: 'Обувь',
        img: "https://humo.fra1.cdn.digitaloceanspaces.com/magicbot/humodemo/categories/OH7ON4g1NAbGH1Lz81j8QvN02ru59X7okelJoiGJ.png",
        products: [
            {
                product_id:7,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'shoes'
            },
            {
                product_id:8,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:9,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:10,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:11,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:12,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            }
            
        ]  
    },
    {
        id: 3,
        category_type: 'furniture',
        name: 'Для дома',
        img: "https://humo.fra1.cdn.digitaloceanspaces.com/magicbot/humodemo/categories/bKR4qIAVWRnTtCjHf3fOWCnDEudU5cEx7BXWqeYY.png",
        products: [
            {
                product_id:13,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'furniture'
            },
            {
                product_id:14,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'furniture'
            },
            {
                product_id:15,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'furniture'
            },
            {
                product_id:16,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'furniture'
            },
            {
                product_id:17,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'furniture'
            },
            {
                product_id:18,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'furniture'
            }
            
        ]  
    },
    {
        id: 4,
        category_type: 'Гигиена и уход',
        name: 'Гигиена и уход',
        img: "https://humo.fra1.cdn.digitaloceanspaces.com/magicbot/humodemo/categories/MK3bqLbudpKVVBgUsUaiFaOKeD08Y2M7eWf55bW8.png",
        products: [
            {
                product_id:19,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:20,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:21,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:22,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:23,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            },
            {
                product_id:24,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt'
            }
            
        ] 
    },
    {
        id: 5,
        category_type: 'Питание и посуда',
        name: 'Питание и посуда',
        img: "https://humo.fra1.cdn.digitaloceanspaces.com/magicbot/humodemo/categories/wC15XYMcj9gfzx4hiHx4snI8NS51wJRVtKr2TO4s.png",
        products: [
            {
                product_id:25,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Питание и посуда'
            },
            {
                product_id:26,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Питание и посуда'
            },
            {
                product_id:27,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Питание и посуда'
            },
            {
                product_id:28,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Питание и посуда'
            },
            {
                product_id:29,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Питание и посуда'
            },
            {
                product_id:30,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Питание и посуда'
            }
            
        ]  
    },
    {
        id: 6,
        category_type: 'Ijodkorlik',
        name: 'Ijodkorlik',
        img: "https://humo.fra1.cdn.digitaloceanspaces.com/magicbot/humodemo/categories/MmMlJhKFjCvKl1ksTKPZqsdYqGPF0jGYwro80ah7.png",
        products: [
            {
                product_id:31,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Ijodkorlik'
            },
            {
                product_id:32,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Ijodkorlik'
            },
            {
                product_id:33,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Ijodkorlik'
            },
            {
                product_id:34,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Ijodkorlik'
            },
            {
                product_id:35,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Ijodkorlik'
            },
            {
                product_id:36,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['white', 'black', 'red', 'green', 'yellow', 'blue'],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Ijodkorlik'
            }
            
        ]  
    },
]