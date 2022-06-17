import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom"

export default function CategoryView() {
    
    const { id } = useParams();

    return(
        <div>
            <ItemListContainer categoryId={id} />
        </div>
    )
}