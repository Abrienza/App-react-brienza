import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"

export default function ItemDetail() {

    const { id } = useParams();

    return (
        <div>
            <ItemDetailContainer productId={id}/>
        </div>
    )
}

