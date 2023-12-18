import axios from 'axios';
import { create } from 'zustand'
import { BASE_URL } from '../constant/constantes';

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