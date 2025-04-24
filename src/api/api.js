import axios from "axios";

const BASE_URL = "https://fakestoreapi.com"

export const getAllProducts = async()=>{
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response;
    } catch (error) {
        throw(error);
    }
}

export const getProductById = async( id )=>{
    try {
        const response =axios.get(`${BASE_URL}/products/${id}`)
        return response;
    } catch (error) {
        throw(error);
    }
}