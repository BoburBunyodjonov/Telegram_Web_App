import { CategoriesAll, ProductList } from "../../../components";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import BottomDrawer from "../../../components/BottomModal";
import {
  togglePriceSortDrawer,
  toggleSortDrawer,
} from "../../../reducers/DrawerSlice";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Radio, RadioGroup } from "@mui/material";

const Categories = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const priceSortDrawer = useSelector(
    (state: RootState) => state.drawer.priceSortOpen
  );
  const sortDrawer = useSelector((state: RootState) => state.drawer.sortOpen);

  const handleSortDrawerToggle = () => {
    dispatch(toggleSortDrawer());
  };
  const handlePriceSortDrawerToggle = () => {
    dispatch(togglePriceSortDrawer());
  };

  return (
    <>
      <Header />
      <CategoriesAll />
      <ProductList>
        <div className="flex justify-between">
          <h2 className="font-semibold text-telegram-black py-2 text-xl">
            {t("all_products")}
          </h2>
          <div>
            <div className="flex items-center gap-2 mt-3 px-4">
              <div>
                <p
                  onClick={handleSortDrawerToggle}
                  className=" w-fit py-1 px-2 rounded-2xl text-sm cursor-pointer flex-nowrap text-telegram-black border flex items-center"
                >
                  Сортировать
                  <ExpandMoreIcon />
                </p>
              </div>
              <div>
                <div className="w-fit rounded-2xl py-1 px-2 text-sm cursor-pointer gap-2 flex-nowrap text-telegram-black border flex items-center">
                  <p onClick={handlePriceSortDrawerToggle} className="">
                    Цена
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProductList>

      <BottomDrawer
        open={sortDrawer}
        onClose={handleSortDrawerToggle}
        title={t("show_first")}
      >
        <RadioGroup name="sort">
          <div className="transition ease rounded-t-2xl bg-telegram-white max-h-[80vh] animate-slide-up scrollbar-hide overflow-y-scroll px-4 pb-4 w-full">
            <label htmlFor="best_sellers">
              <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                  {t('best_sellers')}
                </div>
                <Radio
                        name="sort"
                        id="best_sellers"
                        value="best_sellers"
                      />
              </div>
            </label>
            <label htmlFor="cheap">
              <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                  {t('cheap')}
                </div>
                <Radio
                        name="sort"
                        id="cheap"
                        value="cheap"

                      />
              </div>
            </label>
            <label htmlFor="expensive">
              <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                  {t('expensive')}
                </div>
                <Radio
                        name="sort"
                        id="expensive"
                        value="expensive"
                      />
              </div>
            </label>
            <label htmlFor="new_arrivals">
            <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
              <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                {t('new_arrivals')}
              </div>
              <Radio
                        name="sort"
                        id="new_arrivals"
                        value="new_arrivals"

                      />
            </div>
            </label>
          </div>
        </RadioGroup>
        <button
          onClick={handleSortDrawerToggle}
          title="common.close"
          className="text-white disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex justify-center items-center w-full py-4 px-4 overflow-hidden bg-[#2F9155] mt-4 rounded-xl"
        >
          {t("apply")}
        </button>
      </BottomDrawer>
      <BottomDrawer
        open={priceSortDrawer}
        onClose={handlePriceSortDrawerToggle}
        title={t("price")}
      >
        <div className="transition ease rounded-t-2xl bg-white max-h-[52vh] animate-slide-up scrollbar-hidde  w-full overflow-hidden">
          <div className="grid grid-cols-2 items-center gap-2 mt-4">
            <div className="bg-gray-100 w-full flex items-center p-2 rounded-xl gap-2 active:bg-gray-100-active border ring-2 ring-telegram-primary">
              <p className="text-telegram-hint">dan</p>
              <span className="bg-transparent outline-none font-medium w-full relative">
                0
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                width="18"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="bg-gray-100 w-full flex items-center p-2 rounded-xl gap-2 active:bg-gray-100-active">
              <p className="text-telegram-hint">gacha</p>
              <span className="bg-transparent outline-none font-medium w-full "></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                width="18"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <button
            onClick={handlePriceSortDrawerToggle}
            title="common.close"
            className="text-white disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex justify-center items-center w-full py-4 px-4 overflow-hidden bg-[#2F9155] mt-4 rounded-xl"
          >
            {t("apply")}
          </button>
          <div className="flex-col items-center  z-50 mt-3 select-none transition  relative -left-0 opacity-100 -translate-y-0 flex">
            <div className="grid grid-cols-3 gap-2 m-auto w-full  p-2">
              <button className=" p-3 text-2xl bg-[#D2D6DB] text-black border shadow-sm active:bg-[#c4cede] active:border-[#c4cede] rounded-md">
                1
              </button>
              <button className=" p-3 text-2xl bg-[#D2D6DB] text-black border shadow-sm active:bg-[#c4cede] active:border-[#c4cede] rounded-md">
                2
              </button>
              <button className=" p-3 text-2xl bg-[#D2D6DB] text-black border shadow-sm active:bg-[#c4cede] active:border-[#c4cede] rounded-md">
                3
              </button>
              <button className=" p-3 text-2xl bg-[#D2D6DB] text-black border shadow-sm active:bg-[#c4cede] active:border-[#c4cede] rounded-md">
                4
              </button>
              <button className=" p-3 text-2xl bg-[#D2D6DB] text-black border shadow-sm active:bg-[#c4cede] active:border-[#c4cede] rounded-md">
                5
              </button>
              <button className=" p-3 text-2xl bg-[#D2D6DB] text-black border shadow-sm active:bg-[#c4cede] active:border-[#c4cede] rounded-md">
                6
              </button>
              <button className=" p-3 text-2xl bg-[#D2D6DB] text-black border shadow-sm active:bg-[#c4cede] active:border-[#c4cede] rounded-md">
                7
              </button>
              <button className=" p-3 text-2xl bg-[#D2D6DB] text-black border shadow-sm active:bg-[#c4cede] active:border-[#c4cede] rounded-md">
                8
              </button>
              <button className=" p-3 text-2xl bg-[#D2D6DB] text-black border shadow-sm active:bg-[#c4cede] active:border-[#c4cede] rounded-md">
                9
              </button>
              <button
                className=" p-3 text-2xl text-black"
                onClick={handlePriceSortDrawerToggle}
              >
                {t("close")}
              </button>
              <button className=" p-3 text-2xl bg-[#D2D6DB] text-black border shadow-sm active:bg-[#c4cede] active:border-[#c4cede] rounded-md">
                0
              </button>
              <button className=" p-3 text-2xl text-black   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-8 h-8 mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </BottomDrawer>
    </>
  );
};

export default Categories;
