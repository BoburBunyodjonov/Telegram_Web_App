import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import { categoriesArr, CategoryType } from "../constants/Categories.constants";
import { NavLink, useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Skeleton } from "@mui/material";
import { useTranslation } from "react-i18next";

const CategoriesAll: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleListItemClick = (id: number) => {
    const clickedItem = categoriesArr.find(
      (item: CategoryType) => item.id === id
    );
    if (clickedItem) {
      navigate(`/singleCategorie/${id}`);
    } else {
      // console.log("Error: Item not found");
    }
    // console.log(`Selected item ID: ${id}`);
  };

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 500);
  });

  const { t } = useTranslation();

  return (
    <>
      <div className="rounded-2xl mt-3 p-4 bg-white">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold text-xl text-telegram-black">
            {t("catalog_title")}
          </h2>
          <NavLink
            to="/categories"
            className="bg-telegram-secondary-white px-4 py-2 text-sm rounded-xl flex text-telegram-black items-center"
          >
            {t("all_catalog")}
            <NavigateNextIcon />
          </NavLink>
        </div>
        <div className="gap-4 mb-4 grid grid-cols-2">
          {categoriesArr.map((item, index) => {
            if (
              item.id !== undefined &&
              item.name !== undefined &&
              item.img !== undefined
            ) {
              return loading ? (
                <Skeleton
                  key={`skeleton-${index}`} // Unique key for Skeleton
                  sx={{ height: 190 }}
                  animation="wave"
                  variant="rounded"
                />
              ) : (
                <CategoriesCard
                  key={item.id} // Unique key for CategoriesCard
                  handlerClick={() => handleListItemClick(item.id)}
                  item={item}
                  text={item.name}
                  image={item.img}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
};

export default CategoriesAll;
