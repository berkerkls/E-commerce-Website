import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"


export const login = async (dispath, user) => {
    
    dispath(loginStart());


    try {
        const res = await publicRequest.get("/auth/login",user)

        dispath(loginSuccess(res.data))
        dispath(loginFailure())
    } catch (err) {
        loginFailure(loginFailure())
    }
    
}