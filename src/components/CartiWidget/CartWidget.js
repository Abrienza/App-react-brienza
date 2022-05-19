import { Link } from "react-router-dom"

export default function CartWidget({ counter }){
    return(
        <div>
            <Link to="/cart"><img src="img/list-star.png" alt="estrella tipo Cart"/>
            </Link>
            {counter}
        </div>
    )
}