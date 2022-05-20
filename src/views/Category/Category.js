import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom"

export default function Category() {
    
    const { id } = useParams();

    return(
        <div>
            <h2> Categoría </h2>
            <ItemListContainer categoryId={id} />
        </div>
    )
}