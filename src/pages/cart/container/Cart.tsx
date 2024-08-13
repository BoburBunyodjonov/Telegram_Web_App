import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartCard from "../components/CartCard";
import DeleteIcon from "@mui/icons-material/Delete";
import currency from "currency.js";
import { RootState } from "../../../store/store";
import { useTranslation } from "react-i18next";
import { clearCart } from "../../../reducers/CartSlice";

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
  const dispatch = useDispatch();
  const cartitems = useSelector((state: RootState) => state.cart) as ProductType[];
  const navigate = useNavigate();
  const { t } = useTranslation();

  const calculateTotalPrice = (): string => {
    let totalPrice = 0;
    cartitems.forEach((product: ProductType) => {
      const calculateDiscountedPrice = (price: number, discountPercent: number): number => {
        return price - price * (discountPercent / 100);
      };
      const discountedPrice = calculateDiscountedPrice(product.price, product.discount_percent);
      totalPrice += discountedPrice * product.quantity;
    });

    const formattedPrice = currency(totalPrice, {
      precision: 0,
      symbol: "",
      separator: " ",
    }).format();

    return formattedPrice;
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const totalQuantity = cartitems.reduce((acc, item) => acc + item.quantity, 0);



  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="h-full bg-white">
        <div className="bg-white flex p-3 justify-between items-center">
          <h2 className="text-2xl font-semibold text-telegram-black">{t('cart')}</h2>
          <DeleteIcon onClick={handleClearCart} />
        </div>
        <div className="h-[74vh] overflow-scroll bg-white">
          {cartitems.map((data: ProductType) => (
            <CartCard key={data.product_id} {...data} />
          ))}
        </div>

        {cartitems.length > 0 && (
          <div className="md:w-[500px] container bg-white flex fixed shadow-xl items-center justify-between pb-5 pt-2 px-3 z-20 bottom-16 mx-auto bottom-navbarHeight shadow-top">
            <div>
              <p className="font-semibold text-xl">
                {calculateTotalPrice()} {cartitems[0].currency}
              </p>
              <p className="text-telegram-hint">
                {totalQuantity} {t('product')}
              </p>
            </div>
            <button
              className="text-sm font-semibold px-3 py-3 bg-[#309156] rounded-xl shadow-sm mt-auto flex items-center justify-center gap-1 bg-telegram-primary text-white"
              onClick={handleCheckout}
            >
              {t('checkout')}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
