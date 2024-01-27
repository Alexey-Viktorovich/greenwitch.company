import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

import CarouselHome from '../carousel/carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../page-css/homePage.css';
import data from '../content/content.json';

export default function HomePage(props) {
    let [content, setContent] = useState(data.localeUA)

    const {locale} = props;

    useEffect(() => {
        {locale ? setContent(content = data.localeUA) : setContent(content = data.localeENG)}
    })

    useEffect(() => {
        {window.scroll(0, 0)}
    })
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    return (
        <Container fluid>
            <CarouselHome locale={props.locale} />
            <div className='info-block-app'>
                <Container className='info-bg'>
                        <Row className='info-text-block'>
                            <Col className='info-text'>
                                <h1>{content.homepage.infotext.h1}</h1>
                                <p>{content.homepage.infotext.p}</p>
                            </Col>
                        </Row>
                        <Row className='info-text-mini-block'>
                            {content.homepage.infotextmini.map(el => (
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
                            {content.catalogpage.items.map(el => (
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
                    <Nav className='products-but'>{content.homepage.productsbut}</Nav>
                </NavLink>
                    <Row className='team-title'>
                        <Col>
                            <h1>{content.homepage.team.h1}</h1>
                            <h5 className='text-muted'>{content.homepage.team.h5}</h5>
                        </Col>
                    </Row>
                    <Row>
                        {content.homepage.team.teamcontent.map(el => (
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