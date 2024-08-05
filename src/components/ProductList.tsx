import ProductCard from "./ProductCard";

import { categoriesArr } from "../constants/Categories.constants";
import { useNavigate } from "react-router-dom";


const ProductList = (props) => {
  const { children } = props;
  const navigate = useNavigate();


  console.log(categoriesArr);

  const handlerClickFunc = (id) => {
    for (const category of categoriesArr) {
      const clickedItem = category.products.find(
        (item) => item.product_id === id
      );
      if (clickedItem) {
        navigate(`/ProductCardDetails/${id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return; 
      }
    }
    console.log("Error: Item not found");
  };


  return (
    <>
      <div className="bg-white rounded-2xl mt-3 p-4">
        {children}
        <div className="gap-2 mt-4 grid  grid-cols-2">
          {categoriesArr.map((item: categoriesArrType) =>
            item.products.map((data: ProductType) => (
              <ProductCard
                loading
                key={data.product_id}
                items={data}
                onCardClick={() => handlerClickFunc(data.product_id)}
                {...data}
              />
            ))
          )}
        </div>
      </div>
      
    </>
  );
};

export default ProductList;
