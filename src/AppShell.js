import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./views/Home/Home"
import Cart from "./views/Cart/Cart"
import Prods from "./views/Prods/Prods"
import ProdDetail from "./views/ProdDetail/ProdDetail"
import Category from "./views/Category/Category"
import CheckOut from "./views/CheckOut/CheckOut"
import Navbar from "./components/NavBar/NavBar"

export default function AppShell() {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/prods" element={<Prods />} />
                <Route exact path="/proddetail/:productId" element={<ProdDetail />} />
                <Route exact path="/category/:categoryId" element={<Category />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/checkout" element={<CheckOut />} />
            </Routes>
        </BrowserRouter>
    )
}