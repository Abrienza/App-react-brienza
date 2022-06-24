import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"

export default function ItemDetailView() {

    const { id } = useParams();

    return (
        <ItemDetailContainer productId={id}/>
    )
}

