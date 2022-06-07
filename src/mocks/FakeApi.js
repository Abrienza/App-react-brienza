import { products_json } from "../data/productos"

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            if (categoryId) {
                resolve(products_json.filter( e => e.categoryId == categoryId));
            } else {
                resolve(products_json);
            }
        }, 1000)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve(products_json.find( e => e.id == productId ));
        }, 1000)
    })
}
