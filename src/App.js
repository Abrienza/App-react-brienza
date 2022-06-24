import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "../src/context/CartContext"

import HomeView from "./views/HomeView/HomeView"
import CartView from "./views/CartView/CartView"
import ItemDetailView from "./views/ItemDetailView/ItemDetailView"
import CategoryView from "./views/CategoryView/CategoryView"
import CheckOutView from "./views/CheckOutView/CheckOutView"
import OrderView from "./views/OrderView/OrderView"
import Navbar from "./components/NavBar/NavBar"

export default function App() {
    return(
        <BrowserRouter>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<HomeView/>} />
                    <Route exact path="/item/:id" element={<ItemDetailView/>} />
                    <Route exact path="/category/:id" element={<CategoryView/>} />
                    <Route exact path="/cart" element={<CartView/>} />
                    <Route exact path="/checkout" element={<CheckOutView/>} />
                    <Route exact path="/order/:id" element={<OrderView/>} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}
