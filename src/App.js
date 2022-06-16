import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "../src/context/CartContext"

import Home from "./views/HomeView/HomeView"
import CartView from "./views/CartView/CartView"
import ItemDetail from "./views/ItemDetailView/ItemDetailView"
import Category from "./views/CategoryView/CategoryView"
import CheckOut from "./views/CheckOutView/CheckOutView"
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
