import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6"

import './navb.css';
import Order from '../order/order';


export default function NavbarMenu(props) {
  let [cartOpen, setCartOpen] = useState(false)
  let [menuBurger, setMenuBurger] = useState(false)

  const {orders} = props;
  const {count} = props;

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
              <Nav className='show-order-button' onClick={() => setCartOpen(cartOpen = false)}>Переглянути</Nav>
          </NavLink>
        </div>
      </>
    )
  } 
  
  const showNothing = () => {
    return (
      <div className='nothing'>
        <h3>Кошик пустий</h3>
      </div>
    )
  }

  const showElemen = () => {
    let cart = cartOpen
    let menu = menuBurger
  
    if (cart && menu === true) {
      setCartOpen(cartOpen = !cartOpen)
      setMenuBurger(menuBurger = !menuBurger)
    } else if (cart === true) {
      setCartOpen(cartOpen = !cartOpen)
    } else if (menu === true) {
      setMenuBurger(menuBurger = !menuBurger)
    } else if (cart === true && menu === false) {
      setCartOpen(cartOpen = !cartOpen)
    } else if (menu === false) {
      setMenuBurger(menuBurger = !menuBurger)
    }
  }
  
  let className = 'shop-cart-button'
  if (orders.length > 0) {
    className += '-activ'
  }

  let classNameCount = 'count'
  if (count > 0) {
    classNameCount += '-activ'
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
            <NavLink className='img-block' to="/">
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
            <NavLink to="/" className='nav-tab'>
                <Nav style={button}>Головна</Nav>
            </NavLink>
            <NavLink to="/about-us" className='nav-tab'>
                <Nav style={button}>Інфо</Nav>
            </NavLink>
            <NavLink to="/catalog" className='nav-tab'>
                <Nav style={button}>Каталог</Nav>
            </NavLink>
            {/* <NavLink to="/ause" className='nav-tab ause'>
                <Nav style={button}>Авторизація</Nav>
            </NavLink> */}
          </Nav>
          <div className={classNameMenuBat} onClick={() => showElemen()}>
            <span></span>
          </div>
          <div>
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
            <span className={classNameCount} onClick={() => setCartOpen(cartOpen = !cartOpen)}>{count}</span>
          </div>
        </Container>
        <div className={classNameBurger}>
        <div className='none' onClick={() => showElemen()}></div>
          <div className='burger-col'>
            <NavLink to="/" className='nav-tab'>
                <Nav style={button}>Головна</Nav>
            </NavLink>
            <NavLink to="/about-us" className='nav-tab'>
                <Nav style={button}>Інфо</Nav>
            </NavLink>
            <NavLink to="/catalog" className='nav-tab'>
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