

import {configureStore} from '@reduxjs/toolkit'
import CartSlice from '../reducers/CartSlice';
import modalReducer from "../reducers/ModalSlice";

export default configureStore({
    reducer: {
        cart: CartSlice,
        modal: modalReducer,
    }
})


