import axios from 'axios';
import { create } from 'zustand'

const BASE_URL = import.meta.env.VITE_URL_BASE;


export const useProductStore = create((set) => ({
    products: [],
    newProducts: [],
    getProduct: async () => {
        const products = (await axios(`${BASE_URL}product/get-products`)).data.users;

        set(state => ({
            ...state,
            products,
            newProducts: products.slice(0, 4),
        }))
    },

}
))