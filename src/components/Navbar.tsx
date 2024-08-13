import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ProductType } from "../constants/Categories.constants";

const Navbar = () => {
  const cartitems = useSelector(
    (state: RootState) => state.cart
  ) as ProductType[];
  const location = useLocation();

  console.log(location.pathname);

  const { t } = useTranslation();

  const totalQuantity = cartitems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <div className="md:max-w-[500px] container mx-auto fixed bottom-0 grid grid-cols-4 px-1 bg-white border-t rounded-t-lg z-40 pb-2">
        <NavLink
          className={`p-3 flex flex-col items-center flex-grow justify-center fill-white text-black ${
            location.pathname === "/" ? "text-green-500" : ""
          }`}
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            width="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          <span className="text-xs mt-1">{t("home")}</span>
        </NavLink>
        <NavLink
          className={`p-3 flex flex-col items-center flex-grow justify-center fill-white text-telegram-primary ${
            location.pathname === "/categories" ? "text-green-500" : ""
          }`}
          to="/categories"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            width="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="text-xs mt-1">{t("catalog")}</span>
        </NavLink>
        <NavLink
          className={`p-3 flex flex-col items-center flex-grow justify-center fill-white text-black ${
            location.pathname === "/cart" ? "text-green-500" : ""
          }`}
          to="/cart"
        >
          <Badge badgeContent={totalQuantity} color="primary">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                width="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <div className="text-white bg-telegram-primary min-w-[16px] h-4 rounded-full flex items-center justify-center text-xs absolute -top-3 -left-3">
                11
              </div>
            </div>
          </Badge>
          <span className="text-xs mt-1">{t("cart")}</span>
        </NavLink>
        <NavLink
          className={`p-3 flex flex-col items-center flex-grow justify-center [&amp;>path]:fill-white text-black ${
            location.pathname === "/profile" ? "text-green-500" : ""
          }`}
          to="/profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            width="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          <span className="text-xs mt-1">{t("profile")}</span>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
