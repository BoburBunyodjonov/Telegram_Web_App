import React, { useState, useEffect } from "react";
import ButtonComp from "./Button";

// Icons
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

// Currency
import currency_value from "currency.js";

import { useDispatch, useSelector } from "react-redux";
import { add, increaseQuantity, decreaseQuantity } from "../reducers/CartSlice";
import { RootState } from "../store/store";
import { Skeleton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import BottomDrawer from "./BottomModal";

// Define the props interface
interface ProductCardProps {
  product_img: string[];
  key: number;
  discount_percent: number;
  price: number;
  title: string;
  currency: string;
  onCardClick: () => void;
  product_id: number;
  items: {
    title: string;
    product_img: string[];
    product_id: number;
    quantity: number;
    price: number;
    discount_percent: number;
    currency: string;
  };
  size: number[];
  color: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  product_img,
  discount_percent,
  price,
  title,
  currency,
  product_id,
  items,
  color,
  size,
  onCardClick,

}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [productDrawerOpen, setProductDrawerOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    const productInCart = cartItems.find(
      (item: { product_id: number }) => item.product_id === items.product_id
    );
    if (productInCart) {
      setAddedToCart(true);
      setQuantity(productInCart.quantity);
    } else {
      setAddedToCart(false);
      setQuantity(0);
    }
  }, [cartItems, items.product_id]);

  const calculateDiscountedPrice = (price: number, discountPercent: number) => {
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

  const handleAddToCart = () => {
    if (!addedToCart) {
      setProductDrawerOpen(true);
    }

    if (productDrawerOpen === true) {
      dispatch(add(items));
      setAddedToCart(true);
      setQuantity(1);
    }
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(product_id));
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(product_id));
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else if (quantity === 1) {
      dispatch(decreaseQuantity(product_id));
      setAddedToCart(false);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 500);
  });

  const { t } = useTranslation();

  const handleProductDrawerToggle = () => {
    setProductDrawerOpen(!productDrawerOpen);
  };

  const handleSizeClick = (size: number) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="w-full rounded-xl flex flex-col justify-between relative min-w-[128px]">
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rounded" />
      ) : (
        <>
          <div onClick={onCardClick}
            className="cursor-pointer w-full h-[240px] overflow-hidden relative rounded-xl bg-[#F0F8FF]"
          >
            <img
              alt={title}
              loading="lazy"
              decoding="async"
              className="object-cover object-center"
              src={product_img[0]}
              style={{
                objectFit: "contain",
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
            <div className="absolute bottom-1 left-1 flex flex-col items-start space-y-1">
              <p className="flex items-center text-white bg-red-500 w-fit font-semibold py-[1px] text-center rounded-md px-2 text-[10px] z-10">
                <LocalFireDepartmentIcon />
                {t("sale")}
              </p>
            </div>
          </div>
        </>
      )}

      {loading ? (
        <React.Fragment>
          <Skeleton animation="wave" height={20} />
          <Skeleton animation="wave" height={20} />
          <Skeleton width="100%" height={40} variant="rounded" />
        </React.Fragment>
      ) : (
        <>
          <div className="p-1.5">
            <div className="flex flex-grow-1 items-start flex-col mt-1">
              <div className="flex w-full justify-between 2xs:items-center flex-row items-start">
                <p className="text-md font-semibold text-red-500">
                  {formattedAmount} {currency}
                </p>
                <p className="text-white px-2 py-[1px] bg-red-500 inline font-semibold text-center rounded-md text-[10px]">
                  {discount_percent}%
                </p>
              </div>
              <p className="relative font-medium text-xs text-gray-400 before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-gray-400 before:top-1/2">
                {formattedPrice} {currency}
              </p>
            </div>
            <div className="mb-2">
              <p className="mt-1 leading-2 line-clamp-1 text-telegram-black text-sm">
                {title}
              </p>
            </div>
          </div>
          <div className="p-1.5">
            {addedToCart ? (
              <div className="bg-[#F8F8F8] shadow-sm flex bg-telegram-secondary-white rounded-lg overflow-hidden w-full">
                <button
                  onClick={handleDecrease}
                  type="button"
                  className="active:bg-gradient-to-r flex-grow flex text-telegram-black items-center justify-start px-2 py-1 active:from-[#00000010]"
                >
                  <RemoveIcon />
                </button>
                <input
                  min="0"
                  pattern="[0-9]*"
                  max="35"
                  className="w-10 bg-[#F8F8F8] flex-grow text-center py-2 px-0 text-telegram-black bg-telegram-secondary-white outline-none"
                  type="text"
                  value={quantity}
                />
                <button
                  onClick={handleIncrease}
                  type="button"
                  className="flex-grow items-center flex justify-end  px-2 py-1 text-telegram-black active:bg-gradient-to-l active:from-[#00000010]"
                >
                  <AddIcon />
                </button>
              </div>
            ) : (
              <ButtonComp
                handlerClick={handleAddToCart}
                icon={<ShoppingBagIcon />}
                text={t("add_cart")}
              />
            )}
          </div>
        </>
      )}
      <BottomDrawer
        open={productDrawerOpen}
        onClose={handleProductDrawerToggle}
        title={title}
      >
        <div className="w-full h-[400px] overflow-hidden relative bg-[#FAFAFA]">
          <img
            alt="Product Image"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={product_img[0]}
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
        <div className="p-4 w-full">
          <div className="">
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
              {title}
            </Typography>
            <p className="font-bold text-sm py-1">Цвет:</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {color.map((col) => (
                <button
                  key={col}
                  type="button"
                  style={{ backgroundColor: col }}
                  className={`w-6 h-6 rounded-full border ${
                    selectedColor === col ? "border-4 border-yellow-500" : ""
                  }`}
                  onClick={() => handleColorClick(col)}
                />
              ))}
            </div>
            <p className="font-bold text-sm py-1">Размер:</p>
            <div className="flex flex-wrap gap-2 mt-1 pb-3">
              {size.map((size) => (
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
            <div className="p-1.5">
            <div className="flex flex-grow-1 items-start flex-col mt-1">
              <div className="flex w-full justify-between 2xs:items-center flex-row items-start">
                <p className="text-md font-semibold text-red-500">
                  {formattedAmount} {currency}
                </p>
              </div>
              <p className="relative font-medium text-xs text-gray-400 before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-gray-400 before:top-1/2">
                {formattedPrice} {currency}
              </p>
            </div>
          </div>
            

              
            {addedToCart ? (
              <div className="bg-[#F8F8F8] shadow-sm flex bg-telegram-secondary-white rounded-lg overflow-hidden w-full">
                <button
                  onClick={handleDecrease}
                  type="button"
                  className="active:bg-gradient-to-r flex-grow flex text-telegram-black items-center justify-start px-2 py-1 active:from-[#00000010]"
                >
                  <RemoveIcon />
                </button>
                <input
                  min="0"
                  pattern="[0-9]*"
                  max="35"
                  className="w-10 bg-[#F8F8F8] flex-grow text-center py-2 px-0 text-telegram-black bg-telegram-secondary-white outline-none"
                  type="text"
                  value={quantity}
                />
                <button
                  onClick={handleIncrease}
                  type="button"
                  className="flex-grow items-center flex justify-end  px-2 py-1 text-telegram-black active:bg-gradient-to-l active:from-[#00000010]"
                >
                  <AddIcon />
                </button>
              </div>
            ) : (
              <ButtonComp
                handlerClick={handleAddToCart}
                icon={<ShoppingBagIcon />}
                text={t("add_cart")}
              />
            )}
          </div>
        </div>
      </BottomDrawer>
    </div>
  );
};

export default ProductCard;
