import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { closeModal, openModal } from "../../../reducers/ModalSlice";

import MyLocation from "../components/MyLocation";
import Header from "../components/Header";
import SliderBanner from "../components/Slider";
import Footer from "../components/Footer";
import { CategoriesAll, ProductList } from "../../../components";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavLink } from "react-router-dom";

const Home = () => {
  const nodeRef = useRef(null);
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.open);

  useEffect(() => {
    console.log("Modal state:", modal);
  }, [modal]);

  const closeModalHandler = () => dispatch(closeModal());
  const doneHandler = () => dispatch(closeModal());

  return (
    <div className="space-y-3">
      <MyLocation />
      <Header />
      <SliderBanner />
      <CategoriesAll />
      <ProductList>
        <div className="flex justify-between">
          <h2 className="font-semibold text-telegram-black py-2 text-xl">
            Скидки 🔥
          </h2>
          <NavLink
            to="/"
            className="bg-telegram-secondary-white text-telegram-black px-4 text-sm rounded-xl flex  items-center"
          >
            Все
            <NavigateNextIcon />
          </NavLink>
        </div>
      </ProductList>
      <Footer />
      <CSSTransition
        nodeRef={nodeRef}
        in={modal}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div
          ref={nodeRef}
          className="modal-container w-full text-center absolute left-0 bottom-0 py-5 border border-grey-500 bg-zinc-300 rounded-t-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="container mx-auto block space-y-3 md:flex md:space-y-0 gap-3 p-3">
            <button
              onClick={doneHandler}
              className="w-full px-4 py-2 bg-white rounded-lg text-red-500"
            >
              Сделать возврат
            </button>
            <button
              onClick={closeModalHandler}
              className="w-full px-4 py-2 bg-white rounded-lg text-blue-500"
            >
              Отмена
            </button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Home;
