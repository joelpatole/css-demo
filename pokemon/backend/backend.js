
import { pokemonData } from "./data.js";

export const fetch = (url, option = {}) => {
    return new Promise((resolve, reject) => {

        const duration = Math.random() * 2000;

        setTimeout(() => {

            resolve({
                json: () => {
                    return new Promise((resolve, reject) => {
                        resolve(pokemonData);
                    })
                }
            })

        }, duration);

    })
}