import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

import CarouselHome from '../carousel/carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../page-css/homePage.css';

export default function HomePage(props) {
    const [contentMini] = useState([
        {
            id: '1',
            img: 'http://greenwitch.company/wp-content/uploads/2021/06/smart-house.png',
            titleh4: 'Встанови додаток',
            text: 'Завантажуй додаток Greenwitch та піклуйся про свої рослини завдяки віддаленому керуванню. Контролюй їх здорове зростання.'
        },
        {
            id: '2',
            img: 'http://greenwitch.company/wp-content/uploads/2021/06/growth-1.png',
            titleh4: 'Керуй віддалено',
            text: 'Налаштовуй необхідні параметри, додавай дії по догляду за рослинами в календар, керуй датчиками та слідкуй за всіма даними онлайн.'
        },
        {
            id: '3',
            img: 'http://greenwitch.company/wp-content/uploads/2021/06/growth.png',
            titleh4: 'Придбай девайси',
            text: 'Придбай необхідні тобі датчики і девайси, та керуй ними у будь-який зручний час. Насолоджуйся гарним врожаем!'
        }
    ])
    const [teamContent] = useState([
        {
            id: '1',
            img: 'http://greenwitch.company/wp-content/uploads/2019/12/22829133_1944876902393620_6536130414175250312_o-300x300.jpg',
            texth4: 'Alexey Yurchenko',
            texth6: 'Greenwitch company owner, CEO, Technical lead'
        },
        {
            id: '2',
            img: 'http://greenwitch.company/wp-content/uploads/2021/06/Untitled-1-285x300.jpg',
            texth4: 'Ivan Lehenkyi',
            texth6: 'Mobile developer'
        },
        {
            id: '3',
            img: 'http://greenwitch.company/wp-content/uploads/2019/12/14207753_1056933651086729_1744851474077619100_o-300x300.jpg',
            texth4: 'Anna Yurchenko',
            texth6: 'Designer, marketing director'
        },
        {
            id: '4',
            img: 'http://greenwitch.company/wp-content/uploads/2021/06/IMG_20210625_123449-300x300.jpg',
            texth4: 'Serhiy Rudnev',
            texth6: 'Embedded developer'
        }
    ])

    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    return (
        <Container fluid>
            <CarouselHome />
            <div className='info-block-app'>
                <Container className='info-bg'>
                        <Row className='info-text-block'>
                            <Col className='info-text'>
                                <h1>Що таке Greenwitch</h1>
                                <p>Мобільний додаток Greenwitch призначений для дистанційного моніторингу та керування зростанням ваших рослин.
                                    Завдяки спеціально створеній програмі ви можете контролювати рівень освітлення, температуру, продування, вологість ґрунту та повітря, полив і зростання будь-яких видів квітів, рослин, мікрозелені, ягід, овочів тощо.
                                    Додаток покаже вам усі графіки та дані за вибраний період часу, а також підкажуть, які кроки зробити, щоб забезпечити комфортний і сприятливий ріст рослин.</p>
                            </Col>
                        </Row>
                        <Row className='info-text-mini-block'>
                            {contentMini.map(el => (
                                <Col className={`info-text-mini${inView ? '-show' : ''}`} ref={ref} key={el.id}>
                                    <img src={el.img} loading="lazy" alt='' className='image' />
                                    <h4>{el.titleh4}</h4>
                                    <p>{el.text}</p>
                                </Col>
                            ))}
                        </Row>
                </Container>
                <Container className='products-bg d-flex'>
                    <Container className='products-bg-row'>
                        <Row className='products-item'>
                            {props.items.map(el => (
                                <div className='products-card' key={el.id}>
                                    <div className='products-card-img'>
                                        <img src={"./img/" + el.img + ".png"} loading="lazy" alt='' />
                                    </div>
                                    <div className='products-content'>
                                        <h4>{el.title}</h4>
                                        <p className='text-muted'>{el.titledesc}</p>
                                        <h5><b>{el.price}</b> $</h5>  
                                    </div>
                                </div>
                            ))}
                        </Row>
                    </Container>
                </Container>
                <Container className='team>'>
                <NavLink to="/catalog">
                    <Nav className='products-but'>Каталог</Nav>
                </NavLink>
                    <Row className='team-title'>
                        <Col>
                            <h1>Наша команда</h1>
                            <h5 className='text-muted'>Ми молодий український стартап</h5>
                        </Col>
                    </Row>
                    <Row>
                        {teamContent.map(el => (
                            <Col className='team-content' key={el.id}>
                                <Col className='team-content-img-box'>
                                    <div className='team-content-img'>
                                        <img className='img' src={el.img} alt='' loading="lazy" />
                                    </div>
                                </Col>
                                <Col className='team-content-text'>
                                    <h4 className='card-title'>{el.texth4}</h4>
                                    <h6 className='text-muted'>{el.texth6}</h6>
                                </Col>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </Container>
    )
}