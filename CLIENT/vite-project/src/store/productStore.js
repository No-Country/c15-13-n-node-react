import axios from 'axios';
import create from 'zustand';

const BASE_URL = import.meta.env.VITE_URL_BASE;


export const useProductStore = create((set) => ({
    products: [],
    getProduct: async () => {
        const products = (await axios(`${BASE_URL}product/get-products`)).data.users;
        console.log(products);
        set(state => ({
            ...state,
            products
        }))
    }
}))