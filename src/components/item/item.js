import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

import './item.css'

export default function Item(props) {

    return (
        <Container className='item'>
                <Col className='item-card'>
                    <Col className='item-block-img'>
                        <div className='item-img'>
                            <img src={"./img/" + props.item.img + ".png"} alt='' onClick={() => props.onShowItem(props.item)} />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h5>{props.item.title}</h5>
                            <p className='text-muted'>{props.item.titledesc}</p>
                        </div>
                    </Col>
                    <Col className='item-content d-flex'>
                        <h5>{props.item.price} $</h5>  
                        <div className='add-to-cart' onClick={() => props.onAdd(props.item)}>+</div>
                    </Col>

                </Col>
        </Container>
    )
}