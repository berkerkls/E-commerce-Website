import axios from "axios"

const BASE_URL = "https://fakestoreapi.com"
const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`${TOKEN}`}
})