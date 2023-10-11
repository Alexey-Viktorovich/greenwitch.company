import { FaTrash } from "react-icons/fa";

export default function Order(props) {
    return (
        <div className='order-item'>
            <img src={"./img/" + props.item.img + ".png"} alt='' />
            <h2>{props.item.title}</h2>
            <p>{props.item.price} $</p>
            <FaTrash className='delete-icon' onClick={() => props.onDelete(props.item.id)}/>      
        </div>
    )
}