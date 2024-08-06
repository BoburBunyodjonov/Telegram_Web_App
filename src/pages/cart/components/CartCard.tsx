import React from "react";
import { useDispatch } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import currency_value from "currency.js";
import { increaseQuantity, decreaseQuantity } from "../../../reducers/CartSlice";



interface CartCardProps {
  product_id?: number;
  price?: number;
  discount_percent?: number;
  quantity?: number;
  title?: string;
  product_img?: string[];
  currency?: string;
  index?: number;
}


const CartCard: React.FC<CartCardProps> = ({
  index,
  price,
  title,
  discount_percent,
  product_img,
  currency,
  product_id,
  quantity,
}) => {
  const dispatch = useDispatch();

  const calculateDiscountedPrice = (price: number = 0, discountPercent: number = 0): number => {
    return price - price * (discountPercent / 100);
  };

  const discountedPrice = calculateDiscountedPrice(price, discount_percent);

  const effectiveQuantity = quantity !== undefined ? quantity : 0;

  const formattedAmount = currency_value(discountedPrice * effectiveQuantity, {
    precision: 0,
    symbol: "",
    separator: " ",
  }).format();

  // increase quantity
  const handleIncrease = () => {
    dispatch(increaseQuantity(product_id));
  };

  // decrease quantity
  const handleDecrease = () => {
    dispatch(decreaseQuantity(product_id));
  };

  const imgSrc =
    product_img?.[0] ||
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";

  return (
    <div
      key={index}
      className="bg-white flex p-3 items-center justify-between py-4 border-b border-opacity-10 "
    >
      <a className="flex-grow" href="/humodemo/products/7010148810809">
        <div className="flex gap-4 items-center">
          <div className="rounded-xl bg-telegram-secondary-white min-w-[64px] h-100 ">
            <div className="relative">
              <img
                alt="Product"
                loading="lazy"
                width="64"
                height="64"
                decoding="async"
                data-nimg="1"
                className="mx-auto"
                src={imgSrc}
                style={{ color: "transparent" }}
              />
              <div className="absolute top-0 right-0 bg-gray-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
                {quantity}
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm leading-2 line-clamp-1 w-full text-telegram-black">
              {title}
            </p>
            <p className="text-xs line-clamp-1 font-medium leading-2 max-w-[200px] w-full text-telegram-black pt-1">
              Розовый / 27
            </p>
            <p className="font-semibold text-sm text-telegram-black">
              {formattedAmount + " " + currency}
            </p>
          </div>
        </div>
      </a>
      <div className="w-28">
        <div className="items-center max-w-[110px] shadow-sm flex bg-telegram-secondary-white rounded-lg overflow-hidden w-full">
          <button
            type="button"
            className="active:bg-gradient-to-r active:from-[#00000010] px-2 py-2 text-telegram-black"
            onClick={handleDecrease}
          >
            <RemoveIcon />
          </button>
          <input
            className="w-10 text-center py-2 px-0 text-telegram-black outline-none bg-transparent"
            type="number"
            value={quantity}
            readOnly
          />
          <button
            type="button"
            className="active:bg-gradient-to-l active:from-[#00000010] px-2 py-2 active:shadow-left text-telegram-black"
            onClick={handleIncrease}
          >
            <AddIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
