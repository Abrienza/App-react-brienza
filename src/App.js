import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./components/CartContext/CartContext"

import Home from "./views/Home/Home"
import CartView from "./views/Cart/Cart"
import ItemDetail from "./views/ItemDetail/ItemDetail"
import Category from "./views/Category/Category"
import CheckOut from "./views/CheckOut/CheckOut"
import Navbar from "./components/NavBar/NavBar"

export default function App() {
    return(
        <BrowserRouter>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/item/:id" element={<ItemDetail/>} />
                    <Route exact path="/category/:id" element={<Category/>} />
                    <Route exact path="/cart" element={<CartView/>} />
                    <Route exact path="/checkout" element={<CheckOut/>} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}
