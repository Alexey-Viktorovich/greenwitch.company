import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";


import Item from '../item/item';
import HeaderFone from '../headerFone/headerFoneCatalog';
import '../page-css/catalog.css'

export default function Catalog(props) {

    let classNames = 'show-order-button'
    if (props.orders.length < 1) {
        classNames += '-none'
    }

    return(
        <Container className='page-block' fluid>
            <HeaderFone />                
            <div className='catalog-block'>
                <Container className='catalog'>
                    <Row className='catalog-item'>
                        <Row className='catalog-item'>
                            {props.items.map(el => (
                                    <Item onShowItem={props.onShowItem} orders={props.orders} key={el.id} item={el} onAdd={props.onAdd}/>
                                ))}
                        </Row>
                        <Col>
                            <NavLink to="/basket">
                                <Nav className={classNames}>Переглянути</Nav>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    )
}