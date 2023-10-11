import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

import HeaderFone from '../headerFone/headerFoneBasket';
import '../page-css/basket.css';

export default function Basket(props) {
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [lastNameDirty, setLastNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [mobileDirty, setMobileDirty] = useState(false)
    const [lastNameError, setLastNameError] = useState('Поле не може бути пустим')
    const [emailError, setEmailError] = useState('Поле не може бути пустим')
    const [mobileError, setMobileError] = useState('Поле не може бути пустим')
    const [formValid, setFormValid] = useState(false)
    let [loadClicks, setLoadClick] = useState(false)
    const [ordersArr, setZakazArr] = useState(props.orders.map(el => el.title))



    useEffect(() => {
        if (lastNameError || emailError || mobileError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        } if (props.orders.length < 1) {
            setFormValid(false)
        } 
    }, [lastNameError, emailError, mobileError, props.orders.length])

    const orders = () => {
        return (
            props.orders.map(el => (
                <Row key={el.id}>
                    <Col className='basket-order-item'>
                        <Col><img src={"./img/" + el.img + ".png"} alt='' /></Col>
                        <Col>{el.title}</Col>
                        <Col>{el.price} $</Col>
                        {/* <Col><button onClick={minus}>-</button>{el.count}<button onClick={plus}>+</button></Col> */}
                        <Col><FaTrash className='delete-icon' key={el.id} onClick={() => props.onDelete(el.id)}/></Col>
                    </Col>
                </Row>
            ))
        )
    }
    
    const showNothing = () => {
        return (
          <div className='nothing'>
            <h3>Кошик пустий</h3>
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
            setLastNameError('Поле повинно містити від 3 до 20 символів')
            if (!e.target.value) {
                setLastNameError('Поле не може бути пустим')
            }
        } else {
            setLastNameError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(?=.{6,254}$)(?![-.])(?!.*[.-]{2})(?!.*[.+-]@)[a-zA-Z0-9_+.-]{1,63}@[a-zA-Z0-9]([a-zA-Z0-9.-])*\.[a-zA-Z]{2,6}$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email не відповідає правилу')
            if (!e.target.value) {
                setEmailError('Поле не може бути пустим')
            }
        } else {
            setEmailError('')
        }

    }

    const mobileHandler = (e) => {
        setMobile(e.target.value)
        const regexpTel = /^(\+3|3|8)?[s\-]?\(?[489][0-9]{2}\)?[s\-]?[0-9]{3}[s\-]?[0-9]{2}[s\-]?[0-9]{2}$ /;
        if (e.target.value.length <10 || e.target.value.length > 12) {
            setMobileError('Номер повинен містити 10-12 символів')
            if (!e.target.value) {
                setMobileError('Поле не може бути пустим')
            } else if (!regexpTel.test(mobile)) {
                setMobileError('Номер повинен містити 10-12 символів')
            }
        } else {
            setMobileError('')
        }
    }

    let sum = 0
    props.orders.forEach(el => sum += Number.parseFloat(el.price))

    let classNames = 'final-pages'
    if (loadClicks === true) {
        classNames += '-open';
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoadClick(loadClicks = !loadClicks)
    }

    // const minus = () => {
    //     setZakazArr(count -1)
    // };

    // const plus = () => {
    //     setZakazArr(count +1)
    // };

    return (
        <Container className='basket-page-block' fluid>
            <HeaderFone />
            <Container className='basket-block' fluid>
                <div className='basket-block1'>
                        <Row className='basket-item'>
                            <h1>
                                <b>Список замовлення</b>
                            </h1>
                        </Row>
                        <Row className='basket-shop-cart'>
                            {props.orders.length > 0 ? orders(props) : showNothing()}
                        </Row>
                </div>
                <Container className='basket-form'>
                    <div id="calculation" className='sum'>
                        <b>Підсумок кошика: {new Intl.NumberFormat().format(sum)} $</b>
                    </div> 
                    <form onSubmit={handleSubmit} className='form'>
                        <div className='form-block'>
                            <input onChange={e => lNameHandler(e)} onBlur={e => blurHandler(e)} maxLength="20" value={lastName} type="text" placeholder="Ім'я" name='lastName' />
                                {(lastNameDirty && lastNameError) && <div className='errors' style={{color: 'red'}}>{lastNameError}</div>}
                            <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} value={email} type="text" placeholder="Email" name='email' />
                                {(emailDirty && emailError) && <div className='errors' style={{color: 'red'}}>{emailError}</div>}
                            <input onChange={e => mobileHandler(e)} onBlur={e => blurHandler(e)} maxLength="12" value={mobile} type="tel" placeholder="Контактний номер" name='mobile' />
                                {(mobileDirty && mobileError) && <div className='errors' style={{color: 'red'}}>{mobileError}</div>}
                            <br/>
                            <button type="submit" disabled={!formValid} onClick={() => props.onAddZakaz(ordersArr, lastName, email, mobile, sum)} className='form-btn-active' >Оформити</button>
                        </div>
                    </form>
                </Container>
            </Container>
            <div className={classNames}>
                <div className='final'>
                    <Container className='final-block'>
                        <h1><b>Дякуємо!</b></h1>
                        <h3><b>Ваше замовлення прийняте</b></h3>
                        <p>Менеджер зв'яжеться з вами найближчим часом</p>
                        <NavLink to="/">
                            <Nav onClick={() => props.onAllDelete()} >Завершити</Nav>
                        </NavLink>
                    </Container>
                </div>
            </div>
        </Container>
    );
}