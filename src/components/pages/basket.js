import React, { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";
import { MdOutlineDoDisturbOn } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

import HeaderFoneBasket from '../headerFone/headerFoneBasket';
import '../page-css/basket.css';
import data from '../content/content.json';

export default function Basket(props) {
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [lastNameDirty, setLastNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [mobileDirty, setMobileDirty] = useState(false)
    let [lastNameError, setLastNameError] = useState('Поле не може бути пустим')
    let [emailError, setEmailError] = useState('Поле не може бути пустим')
    let [mobileError, setMobileError] = useState('Поле не може бути пустим')
    const [formValid, setFormValid] = useState(false)
    let [loadClicks, setLoadClick] = useState(false)
    let [ordersArr, setOrdersArr] = useState(props.orders)
    let [content, setContent] = useState(data.localeUA)

    const {locale} = props;

    useEffect(() => {
        if (lastNameError || emailError || mobileError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        } if (props.orders.length < 1) {
            setFormValid(false)
        }

    }, [lastNameError, emailError, mobileError, props.orders.length])

    useEffect(() => {
        {locale ? setContent(content = data.localeUA) : setContent(content = data.localeENG)}
    })

    const deleteOrders = ((id) => {
        props.onDelete(id)
        setOrdersArr(ordersArr.filter(ordersArr => ordersArr.id !== id))
    })

    const orders = () => {
        return (
            ordersArr.map(el => {
                const { img, title, price, id, quantity } = el;
                const sum = price * quantity
                    return (
                    <Row key={id}>
                        <Col className='basket-order-item'>
                            <Col><img src={"./img/" + img + ".png"} alt='' /></Col>
                            <Col>{title}</Col>
                            <Col>{sum} $</Col>
                            <Col className='last-div-orders'>
                                <div className='quantity'>
                                    <div className='quantity-but' onClick={() => {quantityDecr(id, quantity)}}><MdOutlineDoDisturbOn /></div>
                                        <span>{quantity}</span>
                                    <div className='quantity-but' onClick={() => {quantityIncr(id)}}><MdAddCircleOutline /></div>
                                </div>
                                <FaTrash className='delete-icon' key={id} onClick={() => deleteOrders(id)}/>
                            </Col>
                        </Col>
                    </Row>
                    )
                }
            )
        )
    }
    
    function quantityIncr(id) {
        setOrdersArr(ordersArr.map(order => {
            if (order.id === id) {
                return {
                    ...order, quantity: order.quantity +1
                };
            } else {
                return order
            }
        }))
    }

    function quantityDecr(id, quantity) {
        let quan = quantity;
        setOrdersArr(ordersArr.map(order => {
            if ((order.id === id) && quan > 1) {
                return {
                    ...order, quantity: order.quantity -1
                };
            } else {
                return order
            }
        }))
    }

    const showNothing = () => {
        return (
          <div className='nothing'>
            <h3>{content.basket.basketclin}</h3>
          </div>
        )
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'lastName':
                setLastNameDirty(true)
                if (e.target.value.length === 0) {
                    setLastNameDirty(false)
                }
                break
            case 'email':
                setEmailDirty(true)
                if (e.target.value.length === 0) {
                    setEmailDirty(false)
                }
                break
            case 'mobile':
                setMobileDirty(true)
                if (e.target.value.length === 0) {
                    setMobileDirty(false)
                }
                break

            default: break;
        }
    }

    const lNameHandler = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length <3 || e.target.value.length > 20) {
            setLastNameError(lastNameError = content.basket.errors.lastnameerror)
            if (!e.target.value) {
                setLastNameError(lastNameError = content.basket.errors.defoulerror)
            }
        } else {
            setLastNameError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(?=.{6,254}$)(?![-.])(?!.*[.-]{2})(?!.*[.+-]@)[a-zA-Z0-9_+.-]{1,63}@[a-zA-Z0-9]([a-zA-Z0-9.-])*\.[a-zA-Z]{2,6}$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError(emailError = content.basket.errors.emailerror)
            if (!e.target.value) {
                setEmailError(emailError = content.basket.errors.defoulerror)
            }
        } else {
            setEmailError('')
        }

    }

    const mobileHandler = (e) => {
        setMobile(e.target.value)
        const regexpTel = /^(\+3|3|8)?[s\-]?\(?[489][0-9]{2}\)?[s\-]?[0-9]{3}[s\-]?[0-9]{2}[s\-]?[0-9]{2}$ /;
        if (e.target.value.length <10 || e.target.value.length > 12) {
            setMobileError(mobileError = content.basket.errors.mobileerror)
            if (!e.target.value) {
                setMobileError(mobileError = content.basket.errors.defoulerror)
            } else if (!regexpTel.test(mobile)) {
                setMobileError(mobileError = content.basket.errors.mobileerror)
            }
        } else {
            setMobileError('')
        }
    }

    let sum = 0
    ordersArr.forEach(el => sum += el.price * el.quantity)

    let classNames = 'final-pages'
    if (loadClicks === true) {
        classNames += '-open';
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoadClick(loadClicks = !loadClicks)
    }

    return (
        <Container className='basket-page-block' fluid>
            <HeaderFoneBasket locale={props.locale} />
            <Container className='basket-block' fluid>
                <div className='basket-block1'>
                    <Row className='basket-item'>
                        <h1>
                            <b>{content.basket.baskettitle}</b>
                        </h1>
                    </Row>
                    <Row className='basket-shop-cart'>
                        {props.orders.length > 0 ? orders(props) : showNothing()}
                    </Row>
                </div>
                <Container className='basket-form'>
                    <div id="calculation" className='sum'>
                        <b>{content.basket.basketsum} {new Intl.NumberFormat().format(sum)} $</b>
                    </div> 
                    <form onSubmit={handleSubmit} className='form'>
                        <div className='form-block'>
                            <input onChange={e => lNameHandler(e)} onBlur={e => blurHandler(e)} maxLength="20" value={lastName} type="text" placeholder={content.basket.placeholder.name} name='lastName' />
                                {(lastNameDirty && lastNameError) && <div className='errors' style={{color: 'red'}}>{lastNameError}</div>}
                            <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} value={email} type="text" placeholder={content.basket.placeholder.email} name='email' />
                                {(emailDirty && emailError) && <div className='errors' style={{color: 'red'}}>{emailError}</div>}
                            <input onChange={e => mobileHandler(e)} onBlur={e => blurHandler(e)} maxLength="12" value={mobile} type="tel" placeholder={content.basket.placeholder.phone} name='mobile' />
                                {(mobileDirty && mobileError) && <div className='errors' style={{color: 'red'}}>{mobileError}</div>}
                            <br/>
                            <button type="submit" disabled={!formValid} onClick={() => props.onAddZakaz(ordersArr, lastName, email, mobile, sum)} className='form-btn-active'>{content.basket.basketbutton}</button>
                        </div>
                    </form>
                </Container>
            </Container>
            <div className={classNames}>
                <div className='final'>
                    <Container className='final-block'>
                        <h1><b>{content.basket.basketfinal.finaltitle}</b></h1>
                        <h3><b>{content.basket.basketfinal.finaltitle1}</b></h3>
                        <p>{content.basket.basketfinal.finaltext}</p>
                        <NavLink to="/">
                            <Nav onClick={() => props.onAllDelete()} >{content.basket.basketfinal.finalbutton}</Nav>
                        </NavLink>
                    </Container>
                </div>
            </div>
        </Container>
    );
}