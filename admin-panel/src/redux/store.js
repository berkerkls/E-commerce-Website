import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userRedux"
import productReducer from "./productRedux"

export default configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
    },
})