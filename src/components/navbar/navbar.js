import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6"

import './navb.css';
import Order from '../order/order';
import data from '../content/content.json';

export default function NavbarMenu(props) {
  let [cartOpen, setCartOpen] = useState(false)
  let [menuBurger, setMenuBurger] = useState(false)
  let [localeState, setLocaleState] = useState(false)
  let [content, setContent] = useState(data.localeUA)
  // let [auseCount, setAuseCount] = useState(0)   //для зміни стану лічильника, щоб з'явилась прихована кнопка авторизації. Треба на кнопці змінити класнейм та повісити обробник подій на якийсь елемент

  const {orders} = props;
  const {count} = props;
  const {locale} = props;
  //для зміни стану лічильника, щоб з'явилась прихована кнопка авторизації. Треба на кнопці змінити класнейм та повісити обробник подій на якийсь елемент
  // const clickCountAuse = () => {
  //   setAuseCount(auseCount +1)
  // }

  const showOrders = (props) => {
    let sum = 0
    props.orders.forEach(el => sum += Number.parseFloat(el.price))

    return (
      <>
        {props.orders.map(el => (
          <Order onDelete={props.onDelete} key={el.id} item={el}/>
        ))}
        <div className='sum'>
          <b>{content.navbar.sum} {new Intl.NumberFormat().format(sum)} $</b>
          <NavLink to="/basket">
              <Nav className='show-order-button' onClick={() => setCartOpen(cartOpen = false)}>{content.navbar.showorderbutton}</Nav>
          </NavLink>
        </div>
      </>
    )
  } 
  
  const showNothing = () => {
    return (
      <div className='nothing'>
        <h3>{content.basket.basketclin}</h3>
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

  useEffect(() => {
    if (props.locale === true) {
      setLocaleState(localeState = true)
    } else {
      setLocaleState(localeState = false)
    }
    {locale ? setContent(content = data.localeUA) : setContent(content = data.localeENG)}
    
  }, [props.locale])


  const Locale = () => {
    let locale = localeState
    if (locale === true) {
      return (
        <img className="locale" src='./img/icon-ua.png' onClick={() => props.onLocale()}/>
        )
      } else {
        return (
          <img className="locale" src='./img/icon-eng.png' onClick={() => props.onLocale()}/>
        )
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

  //для зміни стану лічильника, щоб з'явилась прихована кнопка авторизації. Треба на кнопці змінити класнейм та повісити обробник подій на якийсь елемент
  // let classNameAuse = 'ause'
  // if (auseCount > 5) {
  //   classNameAuse += '-activ'
  // }

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
              />
            </NavLink>
          </Nav>
          <Nav className='nav-classic'>
            <NavLink to="/" className='nav-tab'>
                <Nav style={button} >{content.navbar.navgolovna}</Nav>
            </NavLink>
            <NavLink to="/about-us" className='nav-tab'>
                <Nav style={button}>{content.navbar.navinfo}</Nav>
            </NavLink>
            <NavLink to="/catalog" className='nav-tab'>
                <Nav style={button}>{content.navbar.navcatalog}</Nav>
            </NavLink>
            {/* <NavLink to="/ause" className='nav-tab ause'>
                <Nav style={button}>{content.navbar.navause}</Nav>
            </NavLink> */}
            {/* <Locale /> */}
          </Nav>
          <div className={classNameMenuBat} onClick={() => showElemen()}>
            <span></span>
          </div>
          
          <div>
            <Locale />
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
            <NavLink onClick={() => showElemen()} to="/" className='nav-tab'>
                <Nav style={button}>{content.navbar.navgolovna}</Nav>
            </NavLink>
            <NavLink onClick={() => showElemen()} to="/about-us" className='nav-tab'>
                <Nav style={button}>{content.navbar.navinfo}</Nav>
            </NavLink>
            <NavLink onClick={() => showElemen()} to="/catalog" className='nav-tab'>
                <Nav style={button}>{content.navbar.navcatalog}</Nav>
            </NavLink>
          </div>
          {/* <div className='burger-col2'>
            <NavLink to="/ause" className='nav-tab ause'>
                <Nav style={button}>{content.navbar.navause}</Nav>
            </NavLink>
          </div> */}
        </div>
      </Navbar>
    </>
  );
}