import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import AddressComp from "../components/AddressComp";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Cash from "../images/cash.svg";
import ClickPay from "../images/click.webp";
import {Radio, RadioGroup } from "@mui/material";
import { useForm } from "react-hook-form";
import currency from "currency.js";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { clearCart } from "../../../reducers/CartSlice";
import { useTranslation } from "react-i18next";
// import { Dayjs } from "dayjs";

interface ProductType {
  name: string;
  price: number;
  quantity: number;
  title: string;
  discount_percent: number;
}

interface FormData {
  name: string;
  phone: string;
  delivery_type: string;
  payment_type: string;
  comment: string;
  // delivery_date?: Dayjs | null;
  address?: string;
}

const calculateDiscountedPrice = (price: number, discountPercent: number): number => {
  return price - price * (discountPercent / 100);
};

const Checkout: React.FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // control,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const cartitems = useSelector(
    (state: RootState) => state.cart
  ) as ProductType[];
  const navigate = useNavigate();

  const [products, setProducts] = useState<ProductType[]>([]);
  const [deliveryMethod, setDeliveryMethod] = useState("free_delivery");
  const [discount, setDiscount] = useState<number>(0);
  const [promoCode, setPromoCode] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("cart") || "[]");
    setProducts(savedProducts);

    const savedAddress = localStorage.getItem("userAddress");
    if (savedAddress) {
      setValue("address", savedAddress);
    }
  }, [setValue]);

  const calculateTotalPrice = (): string => {

    const calculateDiscountedPrice = (
      price: number,
      discountPercent: number
    ): number => {
      return price - price * (discountPercent / 100);
    };

    // Calculate productTotal
    const productTotal = cartitems.reduce((acc, product) => {
      const discountedPrice = calculateDiscountedPrice(
        product.price,
        product.discount_percent || 0
      );

      return acc + discountedPrice * product.quantity;
    }, 0);

    const deliveryFee = deliveryMethod === "delivery" ? 20000 : 0;

    const totalBeforeDiscount = productTotal + deliveryFee;

    const finalTotalPrice = totalBeforeDiscount - discount;

    const formattedPrice = currency(finalTotalPrice, {
      precision: 0,
      symbol: "",
      separator: " ",
    }).format();

    return formattedPrice;
  };

  const applyDiscount = (code: string) => {
    if (code !== "PROMO10") {
      return 0; // No discount
    }
    return 10000; // 10,000 discount
  };
  const onSubmit = (data: FormData) => {
    const discountAmount = applyDiscount(promoCode);
    setDiscount(discountAmount);
    console.log("Form Data: ", data);

    reset();
    alert('Buyurtmangiz qabul qilindi !')
    navigate("/myorders");
    dispatch(clearCart());

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
              {t("place_an_order")}
              
            </Typography>
          </div>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
          {localStorage.getItem("userAddress") ? (
            <div className=" bg-white mt-2 p-4 rounded-2xl">
              <input
                id="address"
                {...register("address")}
                className="bg-gray-50  outline-none border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 py-4"
                placeholder="Ваш адрес"
                readOnly
              />
            </div>
          ) : (
            <AddressComp />
          )}
          <div className="p-4 bg-white mt-2 rounded-2xl">
            <h2 className="font-semibold text-2xl mb-4 text-telegram-black">
              {t("recipient_of_the_order")}
            </h2>
            <div className="mt-2 mb-5 w-full border-b border-telegram-hint opacity-20"></div>
            <div className="">
              <div>
                <input
                  id="name"
                  {...register("name", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                  placeholder={t('your_name')}
                  required
                  type="text"
                />
                {errors.name && (
                  <p className="text-red-600">{t("name_is_required")}</p>
                )}
              </div>
              <div className="mt-4">
                <input
                  id="phone"
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /^\+998\d{2}\d{7}$/,
                      message: "Неверный номер телефона",
                    },
                    validate: (value) => {
                      if (!/^\+?\d+$/.test(value)) {
                        return "Только цифры и символ + допустимы";
                      }
                      return true;
                    },
                  })}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                  placeholder="+998900000000"
                  onInput={(e) =>
                    (e.currentTarget.value = e.currentTarget.value.replace(
                      /[^+\d]/g,
                      ""
                    ))
                  }
                />
                {errors.phone && (
                  <p className="text-red-600">{t('phone_number_is_required')}</p>
                )}
              </div>
            </div>
          </div>
          <RadioGroup
            name="delivery_type"
            value={deliveryMethod}
            onChange={(e) => setDeliveryMethod(e.target.value)}
          >
            <div className="p-4 bg-white mt-4 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-telegram-black py-2 text-xl opacity-100">
                  {t('select_delivery_method')}
                </h2>
                <p className="text-telegram-black font-semibold">
                  {deliveryMethod === "delivery" ? "20 000 сум" : `${t('free')}` }
                </p>
              </div>
              <div className="mt-2 false w-full border-b border-telegram-hint opacity-20"></div>
              <label htmlFor="free_delivery">
                <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                  <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                    <div className="flex flex-col">
                      <p className="w-full opacity-100">{t('free_delivery')}</p>
                    </div>
                  </div>
                  <div className="relative rounded-full bg-telegram-secondary-white max-w-[32px] min-w-[32px] h-8 shadow-inner">
                    <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                      <Radio
                        {...register("delivery_type", { required: true })}
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
                      <p className="w-full opacity-100">{t('pickup')}</p>
                    </div>
                  </div>
                  <div className="relative rounded-full bg-telegram-secondary-white max-w-[32px] min-w-[32px] h-8 shadow-inner">
                    <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                      <Radio
                        {...register("delivery_type", { required: true })}
                        id="pickup"
                        value="pickup"
                      />
                    </div>
                  </div>
                </div>
              </label>
              <label htmlFor="delivery">
                <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                  <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                    <div className="flex flex-col">
                      <p className="w-full opacity-100">
                        {t('delivery')} - 20 000 {t('sum')}
                      </p>
                    </div>
                  </div>
                  <div className="relative rounded-full bg-telegram-secondary-white max-w-[32px] min-w-[32px] h-8 shadow-inner">
                    <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                      <Radio
                        {...register("delivery_type", { required: true })}
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
                {t('payment_method')}
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
                            {t('cash')}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-full bg-gray-100 max-w-[32px] min-w-[32px] h-8 shadow-inner">
                      <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                        <Radio
                          {...register("payment_type")}
                          id="cash"
                          value="cash"
                        />
                      </div>
                    </div>
                  </div>
                </label>
                <label htmlFor="clickpay">
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
                        <Radio
                          {...register("payment_type")}
                          id="clickpay"
                          value="clickpay"
                        />
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </RadioGroup>

          {/* {deliveryMethod === "delivery" && (
            <div className="p-4 bg-white mt-4 rounded-2xl">
              <h2 className="font-semibold text-2xl text-telegram-black">
                Дата и время доставки
              </h2>
              <div className="mt-2 mb-5 w-full border-b border-telegram-hint opacity-20"></div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name="delivery_date"
                  control={control}
                  render={({ field }) => (
                    <DateTimePicker
                      {...field}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(newValue) => {
                        setValue("delivery_date", newValue);
                        field.onChange(newValue);
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
              {errors.delivery_date && (
                <p className="text-red-600">{errors.delivery_date.message}</p>
              )}
            </div>
          )} */}

          <div className="p-4 bg-white mt-4 rounded-2xl">
            <h2 className="font-semibold text-telegram-black my-2 text-xl">
              {t('comment')}
            </h2>
            <div className="mt-2 mb-5 w-full border-b border-telegram-hint opacity-20"></div>
            <div className="">
              <textarea
                id="comment"
                {...register("comment")}
                placeholder={t('comment')}
                rows={5}
                cols={40}
                style={{ resize: "none" }}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              />
            </div>
          </div>
          <div className="mt-4 bg-white p-4 rounded-xl">
            <div className="flex items-center justify-between cursor-pointer">
              <h2 className="font-semibold text-telegram-black text-xl">
                {t('have_promocode')}
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
                  className="... invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 outline-0 border rounded-md px-3 py-2 w-full"
                  placeholder={t('promocode')}
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />

                <div className="flex items-center gap-2 flex-wrap mt-3 "></div>
              </div>
              <button
                type="button"
                onClick={() => setDiscount(applyDiscount(promoCode))}
                className="text-white disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer py-4 px-4 overflow-hidden bg-[#2F9155] rounded-md h-10 flex items-center justify-center w-36"
              >
                {t('apply')}
              </button>
            </div>
          </div>
          <div className="p-4 bg-white mt-4 rounded-2xl">
            <div className="flex justify-between">
              <h2 className="font-semibold text-telegram-black py-2 text-xl">
                {t('order_details')}
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
                <p className="text-telegram-hint">{t('number_of_products')}</p>
                <p className="text-black">
                  <span className="font-semibold">
                    {products.reduce(
                      (acc, product) => acc + product.quantity,
                      0
                    )}
                  </span>
                  <span className="text-telegram-hint ml-1">{t('shkt')}</span>
                </p>
              </div>
              {cartitems.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-telegram-hint">{product.title}</p>
                  <p className="text-black">
                    <span className="font-semibold">
                      {product.quantity} x{" "}
                      {calculateDiscountedPrice(
                        product.price,
                        product.discount_percent || 0
                      )}
                    </span>
                    <span className="text-telegram-hint"> {t('sum')}</span>
                  </p>
                </div>
              ))}
              <div className="flex items-center justify-between mt-1">
                <p className="font-semibold text-lg">{t('total')}:</p>
                <p className="font-semibold text-lg">
                  {calculateTotalPrice()} {t('sum')}
                </p>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0">
            <button
              type="submit"
              className="text-white disabled:bg-[#6fb188] disabled:cursor-not-allowed cursor-pointer items-center py-4 px-4 rounded-xl overflow-hidden bg-[#2F9155] mt-4 rounded-t-xl flex justify-center max-w-screen-sm w-full"
            >
              <span>{t('place_an_order')}</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
