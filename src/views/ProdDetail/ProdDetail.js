import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"

export default function ProdDetail() {

    let params = useParams();

    return (
        <div>
            <ItemDetailContainer productId={params.productId}/>
        </div>
    )
}

