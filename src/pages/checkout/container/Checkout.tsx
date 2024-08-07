import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import AddressComp from "../components/AddressComp";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Cash from "../images/cash.svg";
import ClickPay from "../images/click.webp";
import { Radio, RadioGroup } from "@mui/material";


interface ProductType {
  name: string; // Make sure this matches the actual properties
  price: number;
}
const Checkout = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [deliveryMethod, setDeliveryMethod] = useState("free_delivery");

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("cart") || "[]");
    setProducts(savedProducts);
  }, []);

  const calculateTotalPrice = (): number => {
    const productTotal = products.reduce(
      (acc, product) => acc + product.price,
      0
    );
    const deliveryFee = deliveryMethod === "delivery" ? 20000 : 0;
    return productTotal + deliveryFee;
  };

  const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryMethod(event.target.value);
  };

  return (
    <>
      <div className="md:max-w-[500px] container mx-auto">
        <div className="w-full bg-white py-3 px-1 flex items-center sticky top-0 z-[100]">
          <NavLink
            to="/cart"
            className="bg-telegram-secondary-white text-telegram-black text-xl rounded-xl flex items-center"
          >
            <ArrowBackIcon className="cursor-pointer text-black ml-3" />
          </NavLink>
          <div className="flex flex-col justify-center items-center w-full">
            <Typography
              variant="h6"
              fontSize={18}
              fontWeight={600}
              color="initial"
            >
              Оформить заказ
            </Typography>
          </div>
        </div>
        <AddressComp />
        <form action="">
          <div className="p-4 bg-white mt-4 rounded-2xl">
            <h2 className="font-semibold text-2xl mb-4 text-telegram-black">
              Получатель заказа
            </h2>
            <div className="mt-2 mb-5 w-full border-b border-telegram-hint opacity-20"></div>
            <div className="">
              <div>
                <input
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                  placeholder="Ваше имя"
                  required
                  type="text"
                  name="name"
                />
              </div>
              <div className="mt-4">
                <input
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                  placeholder="+998900000000"
                  pattern="^\+998\d{2}\d{7}$"
                  maxLength={13}
                  type="text"
                  name="phone"
                  required
                />
              </div>
            </div>
          </div>
          <RadioGroup
            name="delivery_type"
            value={deliveryMethod}
            onChange={handleDeliveryChange}
          >
            <div className="p-4 bg-white mt-4 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-telegram-black py-2 text-xl opacity-100">
                  Выберите способ доставки
                </h2>
                <p className="text-telegram-black font-semibold">
                  {deliveryMethod === "delivery" ? "20 000 сум" : "Бесплатно"}
                </p>
              </div>
              <div className="mt-2 false w-full border-b border-telegram-hint opacity-20"></div>
              <label htmlFor="free_delivery">
                <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                  <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                    <div className="flex flex-col">
                      <p className="w-full opacity-100">Бесплатная доставка</p>
                    </div>
                  </div>
                  <div className="relative rounded-full bg-telegram-secondary-white max-w-[32px] min-w-[32px] h-8 shadow-inner">
                    <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                      <Radio
                        name="delivery_type"
                        id="free_delivery"
                        value="free_delivery"
                      />
                    </div>
                  </div>
                </div>
              </label>
              <label htmlFor="pickup">
                <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                  <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                    <div className="flex flex-col">
                      <p className="w-full opacity-100">Самовывоз</p>
                    </div>
                  </div>
                  <div className="relative rounded-full bg-telegram-secondary-white max-w-[32px] min-w-[32px] h-8 shadow-inner">
                    <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                      <Radio name="delivery_type" id="pickup" value="pickup" />
                    </div>
                  </div>
                </div>
              </label>
              <label htmlFor="delivery">
                <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                  <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                    <div className="flex flex-col">
                      <p className="w-full opacity-100">
                        Доставка - 20 000 сум
                      </p>
                    </div>
                  </div>
                  <div className="relative rounded-full bg-telegram-secondary-white max-w-[32px] min-w-[32px] h-8 shadow-inner">
                    <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                      <Radio
                        name="delivery_type"
                        id="delivery"
                        value="delivery"
                      />
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </RadioGroup>

          <RadioGroup name="payment_type" defaultValue="cash">
            <div className="p-4 bg-white mt-4 rounded-2xl">
              <h2 className="font-semibold text-telegram-black py-2 text-xl">
                Способ оплаты
              </h2>
              <div className="mt-2 mb-5 w-full border-b opacity-20"></div>
              <div className="grid grid-cols-1 items-center gap-2">
                <label htmlFor="cash">
                  <div className="gap-2 border-b border-opacity-20 last:border-b-none rounded-xl p-3 flex items-center border-none bg-gray-100 justify-between cursor-pointer">
                    <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                      <div className="grid grid-cols-12 gap-1 items-center justify-center w-full">
                        <img
                          alt="Naqd pul"
                          loading="lazy"
                          width="63"
                          height="32"
                          decoding="async"
                          data-nimg="1"
                          className="col-span-3 h-10"
                          src={Cash}
                          style={{ color: "transparent" }}
                        />
                        <div className="col-span-9">
                          <p className="text-md font-semibold line-clamp-1">
                            Naqd pul
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-full bg-gray-100 max-w-[32px] min-w-[32px] h-8 shadow-inner">
                      <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                        <Radio name="payment_type" id="cash" value="cash" />
                      </div>
                    </div>
                  </div>
                </label>
                <label htmlFor="click">
                  <div className="gap-2 border-b border-opacity-20 last:border-b-none rounded-xl p-3 flex items-center border-none bg-gray-100 justify-between cursor-pointer">
                    <div className="text-black flex-grow font-semibold flex items-center gap-2">
                      <div className="grid grid-cols-12 gap-1 items-center justify-center w-full">
                        <img
                          alt="Click"
                          loading="lazy"
                          width="86"
                          height="32"
                          decoding="async"
                          data-nimg="1"
                          className="col-span-3"
                          src={ClickPay}
                          style={{ color: "transparent" }}
                        />
                        <div className="col-span-9">
                          <p className="text-md font-semibold line-clamp-1">
                            Click
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-full bg-telegram-secondary-white max-w-[32px] min-w-[32px] h-8 shadow-inner">
                      <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                        <Radio name="payment_type" id="click" value="click" />
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </RadioGroup>

          {deliveryMethod === "delivery" ? (
              <div className="p-4 bg-white mt-4 rounded-2xl">
              <h2 className="font-semibold text-2xl text-telegram-black">
                Дата и время доставки
              </h2>
              <div className="mt-2 mb-5 w-full border-b border-telegram-hint opacity-20"></div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DemoItem>
                    <DateTimePicker />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
          ) : ""}

          
          <div className="p-4 bg-white mt-4 rounded-2xl">
            <h2 className="font-semibold text-telegram-black my-2 text-xl">
              Комментарий к заказу
            </h2>
            <div className="mt-2 mb-5 w-full border-b border-telegram-hint opacity-20"></div>
            <div className="">
              <textarea
                className="px-3 py-2 rounded-xl border resize-none bg-gray-100 border-gray-400 text-black min-h-[80px] outline-none  w-full placeholder:opacity-60"
                placeholder="Комментарий к заказу"
              ></textarea>
            </div>
          </div>
          <div className="mt-4 bg-white p-4 rounded-xl">
            <div className="flex items-center justify-between cursor-pointer">
              <h2 className="font-semibold text-telegram-black text-xl">
                Есть промокод?
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                width="24"
                className="transition -rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <div className="flex-grow">
                <input
                  className="outline-0 border rounded-md px-3 py-2 w-full"
                  placeholder="Промокод"
                  minLength={6}
                  type="text"
                  value=""
                />
                <div className="flex items-center gap-2 flex-wrap mt-3 "></div>
              </div>
              <button
                disabled
                className="text-white disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer py-4 px-4 overflow-hidden bg-[#2F9155] rounded-md h-10 flex items-center justify-center w-36"
              >
                Применить
              </button>
            </div>
          </div>
          <div className="p-4 bg-white mt-4 rounded-2xl">
            <div className="flex justify-between">
              <h2 className="font-semibold text-telegram-black py-2 text-xl">
                Детали заказа
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="transition rotate-0"
                width="24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <div className="mt-3 [&amp;>div]:border-b [&amp;>div]:py-2 ">
              <div className="flex items-center justify-between">
                <p className="text-telegram-hint">Кол-во товаров</p>
                <p className="text-black">
                  <span className="font-semibold">{products.length}</span>
                  <span className="text-telegram-hint ml-1">щт</span>
                </p>
              </div>
              {products.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-telegram-hint">{product.name}</p>
                  <p className="text-black">
                    <span className="font-semibold">{product.price}</span>
                    <span className="text-telegram-hint"> сум</span>
                  </p>
                </div>
              ))}
              <div className="flex items-center justify-between mt-1">
                <p className="font-semibold text-lg">Итого к оплате:</p>
                <p className="font-semibold text-lg">
                  {calculateTotalPrice()} сум
                </p>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0">
            <button
              disabled
              className="text-white disabled:bg-[#6fb188] disabled:cursor-not-allowed cursor-pointer items-center py-4 px-4 rounded-xl overflow-hidden bg-[#2F9155] mt-4 rounded-t-xl flex justify-center max-w-screen-sm w-full"
            >
              <span>Оформить заказ</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
