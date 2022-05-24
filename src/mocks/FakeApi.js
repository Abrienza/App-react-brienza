import { products_json } from "../data/productos"

export const task = new Promise ((resolve, rejected) => {

    let condition = true

    setTimeout(() => {
        if(condition){
            resolve(products_json);
        }else{
            rejected('Salió mal')
        }
    }, 2000)

})

export const getProductById = (productId) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve(products_json.find( e => e.id == productId ));
        }, 2000)
    })
}