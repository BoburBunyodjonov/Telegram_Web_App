import React from "react";
import {useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { Button } from "../../../components";
import DeleteIcon from "@mui/icons-material/Delete";
// import { remove } from "../../../reducers/CartSlice";
import currency_value from "currency.js";
import { RootState } from "../../../store/store";

interface ProductType {
  product_id: string;
  price: string; 
  discount_percent: number;
  quantity: number;
  title: string; 
  product_img: string[]; 
  currency: string;
}

const Cart: React.FC = () => {
  const cartitems = useSelector((state: RootState) => state.cart);

  const calculateTotalPrice = (): string => {
    let totalPrice = 0;
    cartitems.forEach((product: ProductType) => {
      const calculateDiscountedPrice = (price: number, discountPercent: number) => {
        return price - price * (discountPercent / 100);
      };
      const discountedPrice = calculateDiscountedPrice(
        parseFloat(product.price),
        product.discount_percent
      );

      const amount = currency_value(discountedPrice * product.quantity, {
        precision: 10,
        symbol: "",
        separator: " ",
      }).value;

      totalPrice += amount;
    });
    return totalPrice.toFixed(3);
  };

  return (
    <>
      <div className="bg-white flex p-3 justify-between items-center">
        <h2 className="text-2xl font-semibold text-telegram-black">Savat</h2>
        <DeleteIcon />
      </div>
      <div className="h-[74vh] overflow-scroll bg-white">

      {cartitems.map((data: ProductType, index: number) => (
        <CartCard key={data.product_id} index={index} {...data} />
      ))}
      </div>
      
      <div className="bg-white grid grid-cols-2 fixed shadow-xl items-center justify-between pb-5 pt-2 px-3 z-20 bottom-16 w-[500px]  mx-auto bottom-navbarHeight shadow-top">
        <div>
          <p className="font-semibold text-xl">
            {calculateTotalPrice() + " " + "UZS"}
          </p>
          <p className="text-telegram-hint">{cartitems.length} mahsulotlar</p>
        </div>
        <Button text="Rasmiylashtirish" />
      </div>
    </>
  );
};

export default Cart;
