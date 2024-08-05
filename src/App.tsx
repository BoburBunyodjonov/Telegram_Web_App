// React Router Dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import './App.css'

// Root Layout
import Layout from "./layout/Layout";

// Pages
import { Cart, Categories, Home, Profile, SingleCategorie } from "./pages";

import "./App.css";
import { ProductCardDetails } from "./components";

import StoreProvider from "./store/StoreProvider";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/ProductCardDetails/:id"
          element={<ProductCardDetails />}
        />
        <Route path="/singleCategorie/:id" element={<SingleCategorie />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <>
      <StoreProvider>
        <RouterProvider router={routes} />
      </StoreProvider>
    </>
  );
};

export default App;
