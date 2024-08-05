import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { categoriesArr } from "../../../constants/Categories.constants";
import { ProductCard } from "../../../components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ProductType {
  product_id: number;
  title: string;
  price: number;
  sale: boolean;
  currency: string;
  discount: boolean;
  discount_percent: number;
  size: number[];
  color: string[];
  gender: string;
  description: string;
  product_img: string[];
  pre_orders: boolean;
  bestsellers: boolean;
  category: string;
}

interface CategoryType {
  id: number;
  category_type: string;
  name: string;
  img: string;
  products: ProductType[];
}

const SingleCategorie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<CategoryType | undefined>(undefined);

  useEffect(() => {
    const selectedCategory = categoriesArr.find(
      (category) => category.id === parseInt(id)
    );
    setCategory(selectedCategory);
  }, [id]);

  if (!category) {
    return <Typography>Item not found.</Typography>;
  }

  // Filter products by category_type
  const filteredProducts = category.products.filter(
    (product) => product.category === category.category_type
  );

  // Placeholder handlers and items object
  const handleCardClick = () => {
    // Add logic for card click if needed
  };

  const items = {
    product_id: 0, // Replace with actual product ID if needed
    quantity: 1, // Replace with actual quantity if needed
  };

  return (
    <>
      <div className="">
        <div className="w-full bg-white p-3 flex">
          <NavLink
            to="/"
            className="bg-telegram-secondary-white text-telegram-black  text-xl  rounded-xl flex items-center"
          >
            <ArrowBackIcon className="cursor-pointer text-black ml-3" />
          </NavLink>

          <div className="flex flex-col justify-center items-center w-full">
            <Typography
              className=" text-center"
              variant="h6"
              fontWeight={700}
              color="initial"
            >
              {category.category_type.charAt(0).toUpperCase() +
                category.category_type.slice(1)}
            </Typography>
            <Typography color={"rgb(156 156 156)"} fontSize={14}>
              Total Products: {filteredProducts.length}
            </Typography>
          </div>
        </div>
        <div className="bg-white p-4">
          <div className="gap-2 mt-4 grid grid-cols-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.product_id}
                  product_img={product.product_img}
                  discount_percent={product.discount_percent}
                  price={product.price}
                  title={product.title}
                  currency={product.currency}
                  onCardClick={handleCardClick}
                  product_id={product.product_id.toString()}
                  items={items}
                />
              ))
            ) : (
              <Typography>No products found in this category.</Typography>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCategorie;
