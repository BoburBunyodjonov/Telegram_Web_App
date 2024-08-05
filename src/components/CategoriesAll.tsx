import CategoriesCard from "./CategoriesCard";

import { categoriesArr } from "../constants/Categories.constants";
import { NavLink, useNavigate } from "react-router-dom";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CategoriesAll: React.FC = () => {
  const navigate = useNavigate();

  const handleListItemClick = (id:number) => {
    const clickedItem = categoriesArr.find((item) => item.id === id);
    if (clickedItem) {
      navigate(`/singleCategorie/${id}`);
    } else {
      console.log("Error: Item not found");
    }
    console.log(`Selected item ID: ${id}`);
  };

  return (
    <>
      <div className="rounded-2xl mt-3 p-4 bg-white">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold text-xl text-telegram-black">
            Категории
          </h2>
          <NavLink
            to="/categories"
            className="bg-telegram-secondary-white px-4 py-2 text-sm rounded-xl flex text-telegram-black items-center"
          >
            Все категории
            <NavigateNextIcon />
          </NavLink>
        </div>
        <div className="gap-4 mb-4 grid grid-cols-2">
          {categoriesArr.map((item: categoriesArrType) => (
            <CategoriesCard
              handlerClick={() => handleListItemClick(item.id)}
              key={item.id}
              item={item}
              text={item.name}
              image={item.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesAll;
