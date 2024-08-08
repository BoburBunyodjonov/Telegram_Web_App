import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartCard from "../components/CartCard";
import DeleteIcon from "@mui/icons-material/Delete";
import currency_value from "currency.js";
import { RootState } from "../../../store/store";
import { useTranslation } from "react-i18next";

interface ProductType {
  product_id: number;
  price: number;
  discount_percent: number;
  quantity: number;
  title: string;
  product_img: string[];
  currency: string;
}

const Cart: React.FC = () => {
  const cartitems = useSelector((state: RootState) => state.cart);
  const [localStorageCartItems, setLocalStorageCartItems] = useState<
    ProductType[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems) {
      setLocalStorageCartItems(JSON.parse(storedCartItems));
    }
  }, [cartitems]);

  const calculateTotalPrice = (): string => {
    let totalPrice = 0;
    cartitems.forEach((product: ProductType) => {
      const calculateDiscountedPrice = (
        price: number,
        discountPercent: number
      ) => {
        return price - price * (discountPercent / 100);
      };
      const discountedPrice = calculateDiscountedPrice(
        product.price,
        product.discount_percent
      );

      const amount = currency_value(discountedPrice * product.quantity, {
        precision: 0,
        symbol: "",
        separator: " ",
      }).value;

      totalPrice += amount;
    });
    return totalPrice.toString();
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const { t } = useTranslation();


  return (
    <>
      <div className="h-full bg-white">
        <div className="bg-white flex p-3 justify-between items-center">
          <h2 className="text-2xl font-semibold text-telegram-black">{t('cart')}</h2>
          <DeleteIcon />
        </div>
        <div className="h-[74vh] overflow-scroll bg-white">
          {cartitems.map((data: ProductType, index: number) => (
            <CartCard key={data.product_id} index={index} {...data} />
          ))}
        </div>

        {localStorageCartItems.length > 0 && (
          <div className="md:w-[500px] container bg-white flex fixed shadow-xl items-center justify-between pb-5 pt-2 px-3 z-20 bottom-16 mx-auto bottom-navbarHeight shadow-top">
            <div>
              <p className="font-semibold text-xl">
                {calculateTotalPrice() + " " + "UZS"}
              </p>
              <p className="text-telegram-hint">
                {cartitems.length} mahsulotlar
              </p>
            </div>
            <button
              className="text-sm font-semibold px-3 py-3 bg-[#309156] rounded-xl shadow-sm mt-auto flex items-center justify-center gap-1 bg-telegram-primary text-white"
              onClick={handleCheckout}
            >
              Rasmiylashtirish
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
