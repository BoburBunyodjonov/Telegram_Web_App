import { CategoriesAll, ProductList } from "../../../components";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from "../components/Header";

const Categories = () => {
  return (
    <>
      <Header/>
      <CategoriesAll  />
      <ProductList>
        <div className="flex justify-between">
          <h2 className="font-semibold text-telegram-black py-2 text-xl">
            Все товары
          </h2>
          <div>
            <div className="flex items-center gap-2 mt-3 px-4">
              <div>
                <p className=" w-fit py-1 px-2 rounded-2xl text-sm cursor-pointer flex-nowrap text-telegram-black border flex items-center">
                  Сортировать
                  <ExpandMoreIcon/>
                </p>
              </div>
              <div>
                <div className="w-fit rounded-2xl py-1 px-2 text-sm cursor-pointer gap-2 flex-nowrap text-telegram-black border flex items-center">
                  <p className="">Цена</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProductList>
    </>
  );
};

export default Categories;
