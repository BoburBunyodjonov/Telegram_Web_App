import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ButtonComp from "./Button";

// Icons
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

// Currency
import currency_value from "currency.js";

import { useDispatch, useSelector } from "react-redux";
import { add, increaseQuantity, decreaseQuantity } from "../reducers/CartSlice";
import { openModal } from "../reducers/ModalSlice";
import { RootState } from "../store/store";

const ProductCard = ({
  product_img,
  discount_percent,
  price,
  title,
  currency,
  onCardClick,
  product_id,
  items,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const productInCart = cartItems.find(
      (item) => item.product_id === items.product_id
    );
    if (productInCart) {
      setAddedToCart(true);
      setQuantity(productInCart.quantity);
    } else {
      setAddedToCart(false);
      setQuantity(0);
    }
  }, [cartItems, items.product_id]);

  const calculateDiscountedPrice = (price, discountPercent) => {
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
      dispatch(openModal());
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
    }
  };

  return (
    <div className="w-full rounded-xl flex flex-col justify-between relative min-w-[128px]">
      <div
        onClick={onCardClick}
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
            Распродажа
          </p>
        </div>
      </div>
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
            <button onClick={handleDecrease}
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
            <button onClick={handleIncrease}
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
            text="В корзину"
          />
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product_img: PropTypes.array.isRequired,
  discount_percent: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
  product_id: PropTypes.string.isRequired,
};

export default ProductCard;
