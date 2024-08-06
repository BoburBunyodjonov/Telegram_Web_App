// components/SearchPage.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store/store";
import ProductCard from "../../../components/ProductCard";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  addSearchHistory,
  setSearchQuery,
  removeSearchHistory,
  // clearSearchHistory,
} from "../../../reducers/SearchSlice";
import SearchIcon from "@mui/icons-material/Search";

import {
  categoriesArr,
  CategoryType,
  ProductType,
} from "../../../constants/Categories.constants";
import { Typography } from "@mui/material";

const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const searchHistory = useSelector((state: RootState) => state.search.history);

  useEffect(() => {
    if (searchQuery) {
      dispatch(addSearchHistory(searchQuery));
    }
  }, [searchQuery, dispatch]);

  const filteredProducts = categoriesArr.flatMap((category: CategoryType) =>
    category.products.filter((product: ProductType) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handlerClickFunc = (id: number) => {
    navigate(`/ProductCardDetails/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (e) => {
    setInterval(() => {
      dispatch(setSearchQuery(e.target.value));
    }, 3000);
  };

  const handleDeleteHistory = (query: string) => {
    dispatch(removeSearchHistory(query));
  };

  // const handleClearHistory = () => {
  //   dispatch(clearSearchHistory());
  // };

  return (
    <div className="p-4 bg-white h-full">
      <h2 className="font-semibold text-telegram-black py-2 text-xl">
        Search Results
      </h2>
      <form className="rounded-xl flex justify-between items-center bg-[rgb(237_237_237)] p-2">
        <SearchIcon className="text-[rgb(156_156_156)]" />
        <input
          className="w-full bg-inherit p-2 outline-none"
          placeholder="Искать товары"
          onKeyDown={handleSearchChange}
        />
      </form>
      {searchQuery && (
        <div className="gap-2 mt-4 grid grid-cols-2">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((data: ProductType) => (
              <ProductCard
                key={data.product_id}
                items={data}
                onCardClick={() => handlerClickFunc(data.product_id)}
                {...data}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
      <div className="mt-6">
        <Typography variant="h6" fontWeight={600} fontSize={17} className="font-semibold text-telegram-black py-2">
          Search History
        </Typography>
        <ul>
          {searchHistory.map((query, index) => (
            <li
              key={index}
              className="flex border-b py-3 justify-between items-center"
            >
              <span className="space-x-3 flex">
                <AccessTimeIcon className="text-gray-400" />
                <p>{query}</p>
              </span>
              <CloseIcon
                className="cursor-pointer text-gray-400"
                onClick={() => handleDeleteHistory(query)}
              />
            </li>
          ))}
        </ul>
        {/* {searchHistory.length > 0 && (
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={handleClearHistory}
          >
            Clear All History
          </button>
        )} */}
      </div>
    </div>
  );
};

export default SearchPage;
