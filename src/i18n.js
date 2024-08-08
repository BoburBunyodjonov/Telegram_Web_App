import i18next from "i18next";
import { initReactI18next } from 'react-i18next'
import LanguageDetector from "i18next-browser-languagedetector"


i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    home: 'Home',
                    catalog: 'Catalog',
                    cart: 'Cart',
                    profile: 'Profile',
                    address_add: 'Add address',
                    add_lang_btn: 'Save',
                    search_plac: 'Search products',
                    catalog_title: 'Categories',
                    all_catalog:'All categories',
                    discounts: 'Discounts 🔥',
                    all: 'All',
                    contact_number: 'Contact Number:',
                    social_media: 'We are in social networks',
                    add_cart: "Add to cart",
                    sale: 'Sale',
                    my_orders: 'My Orders',
                    pre_orders: 'Pre Orders',
                    my_profile: "My Profile",
                    my_address: "My Address",
                    language: "Language",
                    all_products: 'All Products',
                }
            },
            uz: {
                translation: {
                    home: 'Bosh Sahifa',
                    catalog: 'Katalog',
                    cart: 'Savat',
                    profile: 'Profil',
                    address_add: 'Manzilingizni kiriting',
                    add_lang_btn: 'Saqlash',
                    search_plac: 'Mahsulotlarni qidirish',
                    catalog_title: 'Kategoriyalar',
                    all_catalog:'Barcha toifalar',
                    discounts: 'Chegirmalar 🔥',
                    all: 'Hammasi',
                    contact_number: 'Aloqa telefon raqami:',
                    social_media:'Biz ijtimoiy tarmoqlardamiz',
                    add_cart: "Savatchaga qo'shish",
                    sale: "Sotish",
                    my_orders: "Mening Buyurtmalarim",
                    pre_orders: "Oldindan buyurtmalar",
                    my_profile: "Mening profilim",
                    my_address: "Mening Manzilim",
                    language: "Til",
                    all_products: "Barcha tovarlar"
                }
            },
            ru: {
                translation: {
                    home: 'Главная',
                    catalog: 'Каталог',
                    cart: 'Корзина',
                    profile: 'Профиль',
                    address_add: 'Укажите ваш адрес',
                    add_lang_btn: 'Сохранять',
                    search_plac: 'Искать товары',
                    catalog_title: 'Категории',
                    all_catalog:'Все категории',
                    discounts: 'Скидки 🔥',
                    all: 'Все',
                    contact_number: 'Контактный телефон:',
                    social_media:'Мы в социальных сетях',
                    add_cart: 'В корзину',
                    sale: 'Распродажа',
                    my_orders: "Мои заказы",
                    pre_orders: "Предварительные заказы",
                    my_profile: "Мой профайл",
                    my_address: "Мой адрес",
                    language: "Язык",
                    all_products: "Все товары",
                }
            }
        }
    })