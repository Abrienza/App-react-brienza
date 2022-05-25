export default function ItemCount({stock, count, onAdd}) {

    const handleResto = () => {
        if (count > 1) {
            onAdd(-1);
        }
    }
    
    const handleSumo = () => {
        if (count < stock) {
            onAdd(1);
        }
    }
    
    return (
        <div className= "contenedorContador">
            <input type="button" value=" - " onClick={handleResto} />
            <span> {count} </span>
            <input type="button" value=" + " onClick={handleSumo} />                    
        </div>
    )}      