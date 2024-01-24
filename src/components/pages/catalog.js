import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";


import Item from '../item/item';
import HeaderFoneCatalog from '../headerFone/headerFoneCatalog';
import '../page-css/catalog.css'
import data from '../content/content.json';

export default function Catalog(props) {
    let [content, setContent] = useState(data.localeUA)

    const {locale} = props;

    useEffect(() => {
        {locale ? setContent(content = data.localeUA) : setContent(content = data.localeENG)}
    })

    let classNames = 'show-order-button'
    if (props.orders.length < 1) {
        classNames += '-none'
    }

    return(
        <Container className='page-block' fluid>
            <HeaderFoneCatalog locale={props.locale} />                
            <div className='catalog-block'>
                <Container className='catalog'>
                    <Row className='catalog-item'>
                        <Row className='catalog-item'>
                            {content.catalogpage.items.map(el => (
                                    <Item onShowItem={props.onShowItem} orders={props.orders} key={el.id} item={el} onAdd={props.onAdd} locale={props.locale}/>
                                ))}
                        </Row>
                        <Col>
                            <NavLink to="/basket">
                                <Nav className={classNames}>{content.navbar.showorderbutton}</Nav>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    )
}