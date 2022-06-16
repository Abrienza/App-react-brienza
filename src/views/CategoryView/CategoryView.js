import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom"

export default function Category() {
    
    const { id } = useParams();

    return(
        <div>
            <ItemListContainer categoryId={id} />
        </div>
    )
}