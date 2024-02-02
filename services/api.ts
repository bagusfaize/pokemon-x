import { API_BASE_URL } from "@/utils/constant";
import axios from "axios";

export const getPokemons = async (limit:number, offset:number) => {
    return await axios.get(API_BASE_URL, {params: {limit, offset}})
    .then((res) => res.data)
    .catch((err) => {
        throw err.response.data
    });
}

export const getPokemonDetails = async (id: number) => {
    return await axios.get(`${API_BASE_URL}/${id}`)
    .then((res) => res.data)
    .catch((err) => {
        throw err.response.data
    });
}