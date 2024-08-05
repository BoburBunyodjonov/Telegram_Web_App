import ProductCard from "./ProductCard";

import { categoriesArr, CategoryType, ProductType  } from "../constants/Categories.constants";
import { useNavigate } from "react-router-dom";

interface ProductListProps {
  products?: ProductType[];
  children?: React.ReactNode;
}

const ProductList: React.FC<ProductListProps> = ({ products, children }) => {
  const navigate = useNavigate();

  const handlerClickFunc = (id: number) => {
    for (const category of categoriesArr) {
      if (category.products) {
        const clickedItem = category.products.find(
          (item: ProductType) => item.product_id === id
        );

        if (clickedItem) {
          navigate(`/ProductCardDetails/${id}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      }
    }
    console.log("Error: Item not found");
  };

  return (
    <>
      <div className="bg-white rounded-2xl mt-3 p-4">
        {children}
        <div className="gap-2 mt-4 grid  grid-cols-2">
          {categoriesArr.map((item: CategoryType) =>
            item.products.map((data: ProductType) => (
              <ProductCard
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
