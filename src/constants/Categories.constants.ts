
export interface categoriesArrType {
    id?: number;
    name?: string;
    img?: string;
    category_type?: string;
    products?: ProductType[];
}

export interface ProductListProps {
    products: ProductType[];
  }

export interface CategoriesCardProps {
    handlerClick: () => void;
    item: CategoryType;
    text: string;
    image: string;
  }

export interface ProductProps {
    price: number;
    discount_percent: number;
  }
  
  


  export interface ProductType {
    product_id: number;
    title: string;
    price: number;
    sale: boolean;
    currency: string;
    discount: boolean;
    discount_percent: number;
    size: number[];
    color: string[];
    gender: string;
    description: string;
    product_img: string[];
    pre_orders: boolean;
    bestsellers: boolean;
    quantity: number;
    category: string;
    date_added?: string; 
    sold?: number; 
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
                product_id: 1,
                title: "Minipicco Кеды Heather",
                price: 329000,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 8,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: [
                  "https://i.pinimg.com/originals/f7/1c/5c/f71c5c1e89dbb27a7e840b6fb60932eb.png",
                  "https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-plain-dark-green-t-shirt-mockup-template-with-view-front-and-png-image_11547250.png",
                  "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png",
                  "https://images.squarespace-cdn.com/content/v1/6136ee30d6ef722b639dbca2/1638340804092-B8ZQOIBR8USKTDUWWV38/Gildan+21_adobespark.png"
                ],
                pre_orders: false,
                bestsellers: false,
                quantity: 0,
                category: 't-shirt',
                date_added: "2023-08-07",
                sold: 850, 
              },
              
            {
                product_id:2,
                title: "Minipicco Кеды Heather",
                price: 329000,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 8,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-plain-dark-green-t-shirt-mockup-template-with-view-front-and-png-image_11547250.png", "https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-plain-dark-green-t-shirt-mockup-template-with-view-front-and-png-image_11547250.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://images.squarespace-cdn.com/content/v1/6136ee30d6ef722b639dbca2/1638340804092-B8ZQOIBR8USKTDUWWV38/Gildan+21_adobespark.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt',
                date_added: "2014-08-07",
                sold: 110, 

            },
            {
                product_id:3,
                title: "Minipicco Кеды Heather",
                price: 329000,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 8,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://images.squarespace-cdn.com/content/v1/6136ee30d6ef722b639dbca2/1638340804092-B8ZQOIBR8USKTDUWWV38/Gildan+21_adobespark.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt',
                date_added: "2024-08-07",
                sold: 1150, 

            },
            {
                product_id:4,
                title: "Minipicco Кеды Heather",
                price: 329000,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 8,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://images.squarespace-cdn.com/content/v1/6136ee30d6ef722b639dbca2/1638340804092-B8ZQOIBR8USKTDUWWV38/Gildan+21_adobespark.png", "https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-plain-dark-green-t-shirt-mockup-template-with-view-front-and-png-image_11547250.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://images.squarespace-cdn.com/content/v1/6136ee30d6ef722b639dbca2/1638340804092-B8ZQOIBR8USKTDUWWV38/Gildan+21_adobespark.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 't-shirt',
                date_added: "2023-01-07",
                sold: 2150, 

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
                product_id:5,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngfre.com/wp-content/uploads/Shoes-7-1024x762.png", "https://png.pngtree.com/png-vector/20231230/ourmid/pngtree-dropshipping-men-hole-sole-jogging-shoes-png-image_11389148.png", "https://www.pngall.com/wp-content/uploads/2016/03/Shoes-Free-Download-PNG.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'shoes',
                date_added: "2024-08-07",
                sold: 150, 
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
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://png.pngtree.com/png-vector/20231230/ourmid/pngtree-dropshipping-men-hole-sole-jogging-shoes-png-image_11389148.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'shoes',
                date_added: "2024-08-07",
                sold: 150, 
            },
            {
                product_id:7,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://www.pngall.com/wp-content/uploads/2016/03/Shoes-Free-Download-PNG.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'shoes',
                date_added: "2024-08-07",
                sold: 150, 
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
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'shoes',
                date_added: "2024-08-07",
                sold: 150, 
            },
        ]  
    },
    {
        id: 3,
        category_type: 'furniture',
        name: 'Для дома',
        img: "https://humo.fra1.cdn.digitaloceanspaces.com/magicbot/humodemo/categories/bKR4qIAVWRnTtCjHf3fOWCnDEudU5cEx7BXWqeYY.png",
        products: [
            {
                product_id:9,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://static.vecteezy.com/system/resources/previews/011/794/199/non_2x/fabric-armchair-soft-cushion-with-metal-leg-3d-rendering-modern-interior-design-for-living-room-free-png.png", "https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-yellow-sofa-furniture-png-image_11548333.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'furniture',
                date_added: "2024-08-07",
                sold: 150, 
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
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://static.vecteezy.com/system/resources/previews/034/106/222/non_2x/arm-chair-file-furniture-free-png.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'furniture',
                date_added: "2024-08-07",
                sold: 150, 
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
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://www.freeiconspng.com/thumbs/furniture-icon-png/red-sofa-furniture-icon-png-4.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'furniture',
                date_added: "2024-08-07",
                sold: 150, 
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
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://www.pngmart.com/files/22/Armchair-Royal-PNG-Image.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'furniture',
                date_added: "2024-08-07",
                sold: 150, 
            },
        ]  
    },
    {
        id: 4,
        category_type: 'Гигиена и уход',
        name: 'Гигиена и уход',
        img: "https://humo.fra1.cdn.digitaloceanspaces.com/magicbot/humodemo/categories/MK3bqLbudpKVVBgUsUaiFaOKeD08Y2M7eWf55bW8.png",
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
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://visplantis.pl/media/cache/product_gallery_view/uploads/app-_aliso-shop-product/files/2798/prebiotyczny-krem-do-twarzy-do-cery-pieknej-choc-naczynkowej.jpg", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Гигиена и уход',
                date_added: "2024-08-07",
                sold: 150, 
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
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://polka-hebe.com/8473-large_default/nivea-care-3in1-anti-wrinkle-lightweight-face-cream-capacity-100-ml.jpg", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Гигиена и уход',
                date_added: "2024-08-07",
                sold: 150, 
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
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://gyntima.com/cdn/shop/products/15.png?v=1569669743&width=800", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Гигиена и уход',
                date_added: "2024-08-07",
                sold: 150, 
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
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://tena-images.essity.com/images-c5/803/319803/optimized-AzurePNG2K/tena-proskin-barrier-cream-perfume-free-100ml-tube-beauty-3200x3200px.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Гигиена и уход',
                date_added: "2024-08-07",
                sold: 150, 
            },
        ] 
    },
    {
        id: 5,
        category_type: 'Питание и посуда',
        name: 'Питание и посуда',
        img: "https://humo.fra1.cdn.digitaloceanspaces.com/magicbot/humodemo/categories/wC15XYMcj9gfzx4hiHx4snI8NS51wJRVtKr2TO4s.png",
        products: [
            {
                product_id:17,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://arbuz.kz/image/s3/arbuz-kz-products/285626-nabor_tarelok_polnocvetnye_18sm_10sht_bumaga_cvet_zheltyi.png?w=460&h=460&_c=1709010823", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Питание и посуда',
                date_added: "2024-08-07",
                sold: 150, 
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
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://www.mdesignegy.com/cdn/shop/products/m-design-202278779_0008s_0004_m-design-202278787.png?v=1649339105&width=1445", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Питание и посуда',
                date_added: "2024-08-07",
                sold: 150, 
            },
            {
                product_id:19,
                title: "Minipicco Кеды Heather",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://vermontbowl.com/cdn/shop/files/IMG-6479_1200x1200.png?v=1700009549", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Питание и посуда',
                date_added: "2024-08-07",
                sold: 150, 
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
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://pngimg.com/d/plate_PNG107703.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'Питание и посуда',
                date_added: "2024-08-07",
                sold: 150, 
            },
            
        ]  
    },
    {
        id: 6,
        category_type: 'teachnology',
        name: 'Teachnology ',
        img: "https://humo.fra1.cdn.digitaloceanspaces.com/magicbot/humodemo/categories/MmMlJhKFjCvKl1ksTKPZqsdYqGPF0jGYwro80ah7.png",
        products: [
            {
                product_id:21,
                title: "Tablet s21",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/google-pixel-tablet.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'teachnology',
                date_added: "2024-08-07",
                sold: 150, 
            },
            {
                product_id:22,
                title: "iWatch ultra 7",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://cdn.tmobile.com/content/dam/t-mobile/en-p/internet-devices/T-Mobile/T-Mobile-SyncUP-KIDS-Watch-2/Black/T-Mobile-SyncUP-KIDS-Watch-2-Black-thumbnail.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'teachnology',
                date_added: "2024-08-07",
                sold: 150, 
            },
            {
                product_id:23,
                title: "Iphone XS",
                price: 2296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'teachnology',
                date_added: "2024-08-07",
                sold: 150, 
            },
            {
                product_id:24,
                title: "Galaxy S23 Ultra",
                price: 296100,
                sale: true,
                currency: "UZS",
                discount: true,
                discount_percent: 10,
                size: [27, 28, 29, 30, 31, 32, 33],
                color: ['red', 'green', ],
                gender: 'male',
                description: "Кеды Heather от Турецкого бренда Minipicco в оранжевом цвете с узорами и двумя застежками",
                product_img: ["https://images.samsung.com/is/image/samsung/p6pim/hk_en/2302/gallery/hk-en-galaxy-s23-ultra-clear-case-ef-qs918-ef-qs918ctegww-534739976?$650_519_PNG$", "https://www.teeprint.co.za/wp-content/uploads/2024/01/Kids%20Think%20Outside%20the%20Box%20Hoodie528041navyfront.png", "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png"],
                pre_orders: false,
                bestsellers: false,
                quantity:0,
                category: 'teachnology',
                date_added: "2024-08-08",
                sold: 240, 
            },
            
        ]  
    },
]