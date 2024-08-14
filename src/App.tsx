// React Router Dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./App.css";

// Root Layout
import Layout from "./layout/Layout";

// Pages
import {
  Address,
  Cart,
  Categories,
  Checkout,
  Home,
  Map,
  MyOrders,
  Profile,
  ProfileInfo,
  SingleCategorie,
} from "./pages";

import "./App.css";
import { ProductCardDetails } from "./components";

import StoreProvider from "./store/StoreProvider";
import SearchPage from "./pages/search/container/SearchPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/checkout" element={<Checkout />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/address" element={<Address />} />
        <Route path="/map" element={<Map />} />
        <Route path="/info" element={<ProfileInfo />} />
        <Route path="/search" element={<SearchPage />} />
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
