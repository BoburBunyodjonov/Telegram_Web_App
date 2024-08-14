import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ReplyIcon from "@mui/icons-material/Reply";
import ProductList from "./ProductList";
import {useParams } from "react-router-dom";
import { categoriesArr, ProductType } from "../constants/Categories.constants";
import currency_value from "currency.js";
import ComeBack from "./ComeBack";
import { setSelectedSize, selectSelectedSize } from '../reducers/SizeSlice'; // Adjust import according to your file structure

const ProductCardDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ProductType | null>(null);
  const selectedSize = useSelector(selectSelectedSize);
  const dispatch = useDispatch();

  interface SliderSettings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
  }

  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() => {
    if (!id) {
      // console.log("Error: id is undefined");
      return;
    }

    let foundItem: ProductType | undefined;

    for (const category of categoriesArr) {
      if (category.products) {
        foundItem = category.products.find(
          (product) => product.product_id === parseInt(id)
        );
      }
      if (foundItem) break;
    }

    setItem(foundItem || null);

    if (!foundItem) {
      // console.log("Error: Item not found");
    }
  }, [id]);

  if (!item) {
    return <Typography>Item not found.</Typography>;
  }

  const { price, discount_percent } = item;

  const calculateDiscountedPrice = (price: number, discountPercent: number): number => {
    return price - price * (discountPercent / 100);
  };

  const discountedPrice = calculateDiscountedPrice(price, discount_percent);

  const formattedAmount = currency_value(discountedPrice, {
    precision: 0,
    symbol: "",
    separator: " ",
  }).format();
  const formattedPrice = currency_value(price, {
    precision: 0,
    symbol: "",
    separator: " ",
  }).format();

  const handleSizeClick = (size: number) => {
    dispatch(setSelectedSize(size));
  };

  


  const allProducts = categoriesArr.flatMap(category => category.products);
  return (
    <>
      <ComeBack text={item.title as string} />
      <Box>
        <Slider {...settings} className="bg-white">
          {item.product_img?.map((imgItem: string, index: number) => (
            <div
              key={index}
              className="w-full h-[400px] overflow-hidden relative bg-[#FAFAFA]"
            >
              <img
                alt="Product Image"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={imgItem}
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
          ))}
        </Slider>
        <div className="bg-white p-3 rounded-b-xl">
          <p className="flex items-center text-white bg-red-500 w-fit font-semibold py-[1px] text-center rounded-md px-2 text-[10px] z-10">
            <LocalFireDepartmentIcon />
            <a href="/ProductCardDetails">Распродажа</a>
          </p>
          <Typography
            variant="h6"
            fontSize={18}
            fontWeight={700}
            py={1}
            color="initial"
          >
            {item.title}
          </Typography>
          <p className="font-bold text-sm py-1">Цвет:</p>
          <button className="px-3 py-2 bg-[#309156] text-white rounded-2xl font-bold">
            Голубой
          </button>
          <p className="font-bold text-sm py-1">Размер:</p>
          <div className="flex flex-wrap gap-2 mt-1 pb-3">
            {item.size?.map((size: number) => (
              <button
                key={size}
                type="button"
                className={`relative rounded-2xl border flex items-center justify-center 
                text-sm uppercase font-semibold select-none p-2 z-0 cursor-pointer ${
                  selectedSize === size ? "bg-[#309156] text-white" : ""
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="w-full bg-[#F8F8F8] text-[#309156] flex items-center justify-center gap-1 rounded-xl px-5 h-12 bg-telegram-secondary-white text-telegram-primary font-semibold"
          >
            <ReplyIcon />
            Поделиться
          </button>
        </div>
        <div className="py-3 bg-white p-4 rounded-xl mt-3 flex justify-between items-start">
          <div>
            <Typography
              className="text-red-500"
              variant="h5"
              fontWeight={700}
              fontSize={25}
            >
              {formattedAmount + " " + item.currency}
            </Typography>
            <s className=" relative font-medium text-lg text-gray-400">
              {formattedPrice + " " + item.currency}
            </s>
          </div>
          <p className=" text-white px-2 py-[1px] bg-red-500 inline font-semibold text-center rounded-md text-[15px]">
            {discount_percent + "%"}
          </p>
        </div>
        <div className=" mb-3 mt-3 bg-white p-4 rounded-xl">
          <Typography
            className="pb-2"
            variant="h5"
            color="initial"
            fontWeight={700}
            fontSize={20}
          >
            Описание товара
          </Typography>
          <Typography
            className=""
            variant="h6"
            color="initial"
            fontWeight={400}
            fontSize={16}
          >
            {item.description}
          </Typography>
        </div>
        <ProductList products={allProducts}>
          <div className="flex justify-between">
            <h2 className="font-semibold text-telegram-black py-2 text-xl">
              Похожие товары
            </h2>
          </div>
        </ProductList>
      </Box>
    </>
  );
};

export default ProductCardDetails;
