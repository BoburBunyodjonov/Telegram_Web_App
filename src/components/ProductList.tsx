import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { categoriesArr, CategoryType, ProductType } from "../constants/Categories.constants";
import { RootState } from "../store/store";

interface ProductListProps {
  children?: React.ReactNode;
}

const ProductList: React.FC<ProductListProps> = ({ children }) => {
  const navigate = useNavigate();
  const searchQuery = useSelector((state: RootState) => state.search.query);

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

  const filteredProducts = categoriesArr.flatMap((category: CategoryType) =>
    category.products.filter((product: ProductType) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="bg-white rounded-2xl mt-3 p-4">
      {children}
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
    </div>
  );
};

export default ProductList;
