import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6"

import './navb.css';
import { useState } from 'react';
import Order from '../order/order';

const showOrders = (props) => {
  let sum = 0
  props.orders.forEach(el => sum += Number.parseFloat(el.price))
  return (
    <>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el}/>
      ))}
      <div className='sum'>
        <b>Разом: {new Intl.NumberFormat().format(sum)} $</b>
        <NavLink to="/basket">
            <Nav className='show-order-button'>Переглянути</Nav>
        </NavLink>
      </div>
    </>
  )
} 

const showNothing = () => {
  return (
    <div className='nothing'>
      <h3>Корзина пуста</h3>
    </div>
  )
}


export default function NavbarMenu(props) {
  let [cartOpen, setCartOpen] = useState(false)
  let [menuBurger, setMenuBurger] = useState(false)
  const {orders} = props;

  let className = 'shop-cart-button'
  if (orders.length > 0) {
    className += '-activ'
  }

  let classNameBurger = 'menu-burger'
  if (menuBurger === true) {
    classNameBurger += ' active'
  }

  let classNameMenuBat = 'menu-btn'
  if (menuBurger === true) {
    classNameMenuBat += ' active'
  }

  const button = {
    padding: 3,
    margin: 3
  }

  return (
    <>
      <Navbar bg="light" fixed='top' className='padtop'>
        <Container fluid>
          <Nav>
            <NavLink className='img-block' to="greenwitch.company/">
              <img
                alt=""
                src="./favicon.png"
                width="50"
                height="50"
                className='d-inline-block align-top'
              />{' '}
            </NavLink>
          </Nav>
          <Nav className='nav-classic'>
            <NavLink to="greenwitch.company/" className='nav-tab'>
                <Nav style={button}>Головна</Nav>
            </NavLink>
            <NavLink to="greenwitch.company/about-us" className='nav-tab'>
                <Nav style={button}>Інфо</Nav>
            </NavLink>
            <NavLink to="greenwitch.company/catalog" className='nav-tab'>
                <Nav style={button}>Каталог</Nav>
            </NavLink>
            {/* <NavLink to="/ause" className='nav-tab ause'>
                <Nav style={button}>Авторизація</Nav>
            </NavLink> */}
          </Nav>
          <div className={classNameMenuBat} onClick={() => setMenuBurger(menuBurger = !menuBurger)}>
            <span></span>
          </div>
          <FaBasketShopping
              onClick={() => setCartOpen(cartOpen = !cartOpen)}
              className={className} />
              {cartOpen && (
                <>
                  <div className='none' onClick={() => setCartOpen(cartOpen = false)}></div>
                  <div className='shop-cart'>
                    {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}
                  </div>

                </>
              )}
        </Container>
        <div className={classNameBurger}>
          <div className='burger-col'>
            <NavLink to="greenwitch.company/" className='nav-tab'>
                <Nav style={button}>Головна</Nav>
            </NavLink>
            <NavLink to="greenwitch.company/about-us" className='nav-tab'>
                <Nav style={button}>Інфо</Nav>
            </NavLink>
            <NavLink to="greenwitch.company/catalog" className='nav-tab'>
                <Nav style={button}>Каталог</Nav>
            </NavLink>
          </div>
          <div className='burger-col2'>
            {/* <NavLink to="/ause" className='nav-tab'>
                <Nav style={button}>Авторизація</Nav>
            </NavLink> */}

          </div>
        </div>
      </Navbar>
    </>
  );
}