import { Component } from "react";
import { FaTrash } from "react-icons/fa";

export default class Order extends Component {
    render() {
        return (
            <div className='order-item'>
                <img src={"./img/" + this.props.item.img + ".jpg"} alt='' />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.price} $</p>
                <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}