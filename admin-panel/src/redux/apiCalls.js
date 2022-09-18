import { getProductFailure, getProductStart, getProductSuccess } from "./productRedux";
import { publicRequest } from "./requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"



export const login = async (dispatch, user) => {
    
    dispatch(loginStart());


    try {
        const res = await publicRequest.get("/auth/login",user)

        dispatch(loginSuccess(res.data))
        dispatch(loginFailure())
    } catch (err) {
        loginFailure(loginFailure())
    }
    
}

export const getProducts = async (dispatch) => {

    dispatch(getProductStart())

    try {
        const res = await publicRequest.get("/products?limit=5")

        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(getProductFailure())
    }
    
}