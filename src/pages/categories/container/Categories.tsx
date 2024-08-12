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
import { useState } from "react";
import {
  categoriesArr,
  ProductType,
} from "../../../constants/Categories.constants";

const Categories = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const priceSortDrawer = useSelector(
    (state: RootState) => state.drawer.priceSortOpen
  );
  const sortDrawer = useSelector((state: RootState) => state.drawer.sortOpen);
  const [selectedSort, setSelectedSort] = useState<string | null>(null);
  const [sortedProducts, setSortedProducts] = useState<ProductType[]>([]);

  const handleSortDrawerToggle = () => {
    dispatch(toggleSortDrawer());
  };
  const handlePriceSortDrawerToggle = () => {
    dispatch(togglePriceSortDrawer());
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSort(event.target.value);
  };

  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(event.target.value) || "");
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value) || "");
  };

  const applySort = () => {
    const sorted = [...categoriesArr.flatMap((category) => category.products)];

    // 4 sort
    if (selectedSort === "expensive") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "cheap") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "new_arrivals") {
      sorted.sort(
        (a, b) =>
          new Date(b.date_added!).getTime() - new Date(a.date_added!).getTime()
      );
    } else if (selectedSort === "best_sellers") {
      sorted.sort((a, b) => (b.sold ?? 0) - (a.sold ?? 0));
    }

    setSortedProducts(sorted);
    dispatch(toggleSortDrawer());

    // Close the drawer
  };
  const applyPriceSort = () => {
    let sorted = [...categoriesArr.flatMap((category) => category.products)];

    // price sort
    if (minPrice !== "" || maxPrice !== "") {
      sorted = sorted.filter((product) => {
        const price = product.price;
        return (
          (minPrice === "" || price >= minPrice) &&
          (maxPrice === "" || price <= maxPrice)
        );
      });
    
     if (sorted.length === 0) {
      return alert('No products available in this price range.');
    }
    }

    if (selectedSort === "expensive") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "cheap") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "new_arrivals") {
      sorted.sort(
        (a, b) =>
          new Date(b.date_added!).getTime() - new Date(a.date_added!).getTime()
      );
    } else if (selectedSort === "best_sellers") {
      sorted.sort((a, b) => (b.sold ?? 0) - (a.sold ?? 0));
    }
    setSortedProducts(sorted);
    dispatch(togglePriceSortDrawer());

    // Close the drawer
  };

  // dispatch(togglePriceSortDrawer());

  const allProducts = categoriesArr.flatMap((category) => category.products);

  return (
    <>
      <Header />
      <CategoriesAll />
      <ProductList
        products={sortedProducts.length > 0 ? sortedProducts : allProducts}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-telegram-black py-2 text-xl">
            {t("all_products")}
          </h2>
          <div className="flex items-center gap-2 mt-3 px-4">
            <p
              onClick={handleSortDrawerToggle}
              className=" w-fit py-1 px-3 rounded-2xl text-md cursor-pointer flex-nowrap text-black border flex items-center"
            >
              {t("sort")}
              <ExpandMoreIcon />
            </p>
              <p onClick={handlePriceSortDrawerToggle} className="w-fit rounded-2xl py-1 px-3 text-md cursor-pointer gap-2 flex-nowrap text-black border flex items-center">
                {t("price")}
              </p>
          </div>
        </div>
      </ProductList>

      <BottomDrawer
        open={sortDrawer}
        onClose={handleSortDrawerToggle}
        title={t("show_first")}
      >
        <RadioGroup
          name="sort"
          value={selectedSort}
          onChange={handleSortChange}
        >
          <div className="transition ease rounded-t-2xl bg-telegram-white max-h-[80vh] animate-slide-up scrollbar-hide overflow-y-scroll px-4 pb-4 w-full">
            <label htmlFor="best_sellers">
              <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                  {t("best_sellers")}
                </div>
                <Radio name="sort" id="best_sellers" value="best_sellers" />
              </div>
            </label>
            <label htmlFor="cheap">
              <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                  {t("cheap")}
                </div>
                <Radio name="sort" id="cheap" value="cheap" />
              </div>
            </label>
            <label htmlFor="expensive">
              <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                  {t("expensive")}
                </div>
                <Radio name="sort" id="expensive" value="expensive" />
              </div>
            </label>
            <label htmlFor="new_arrivals">
              <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                  {t("new_arrivals")}
                </div>
                <Radio name="sort" id="new_arrivals" value="new_arrivals" />
              </div>
            </label>
          </div>
        </RadioGroup>
        <button
          onClick={applySort}
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
        <div className="transition ease rounded-t-2xl bg-white max-h-[52vh] animate-slide-up scrollbar-hidde w-full overflow-hidden">
          <div className="grid grid-cols-2 items-center gap-2 mt-4">
            <div className="bg-gray-100 w-full flex items-center p-2 rounded-xl gap-2 active:bg-gray-100-active border ring-2 ring-telegram-primary">
              <p className="text-telegram-hint">Min Price</p>
              <input
                type="number"
                value={minPrice}
                onChange={handleMinPriceChange}
                className="bg-transparent outline-none font-medium w-full"
                placeholder="0"
              />
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
              <p className="text-telegram-hint">Max Price</p>
              <input
                type="number"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                className="bg-transparent outline-none font-medium w-full"
                placeholder="0"
              />
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
            onClick={applyPriceSort}
            title="common.close"
            className="text-white disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex justify-center items-center w-full py-4 px-4 overflow-hidden bg-[#2F9155] mt-4 rounded-xl"
          >
            {t("apply")}
          </button>
          <div className="flex-col items-center z-50 mt-3 select-none transition relative -left-0 opacity-100 -translate-y-0 flex">
           
          </div>
        </div>
      </BottomDrawer>
    </>
  );
};

export default Categories;
