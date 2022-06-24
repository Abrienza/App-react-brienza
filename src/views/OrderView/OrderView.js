import { useParams } from "react-router-dom";
import Order from "../../components/Order/Order"

export default function OrderView() {

    const { id } = useParams();

    return(
        <Order orderId={id}/>
    )
}