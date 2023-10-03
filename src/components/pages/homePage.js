import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CarouselHome from '../carousel/carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../page-css/homePage.css';

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contentMini: [
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
            ],
            teamContent: [
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
            ]
        }
    }
    
    render() {
        return (
        <Container fluid>
                <CarouselHome/>
                <div className='info-block-app'>
                    <Container className='info-bg'>
                            <Row>
                                <Col className='info-text'>
                                    <h1>Що таке Greenwitch</h1>
                                    <p>Мобільний додаток Greenwitch призначений для дистанційного моніторингу та керування зростанням ваших рослин.
                                        Завдяки спеціально створеній програмі ви можете контролювати рівень освітлення, температуру, продування, вологість ґрунту та повітря, полив і зростання будь-яких видів квітів, рослин, мікрозелені, ягід, овочів тощо.
                                        Додаток покаже вам усі графіки та дані за вибраний період часу, а також підкажуть, які кроки зробити, щоб забезпечити комфортний і сприятливий ріст рослин.</p>
                                </Col>
                            </Row>
                            <Row className='info-text-mini-block'>
                                {this.state.contentMini.map(el => (
                                    <Col className='info-text-mini' key={el.uniqueId}>
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
                                {this.props.items.map(el => (
                                    <div className='products-card' key={el.uniqueId}>
                                        <div className='products-card-img'>
                                            <img src={"./img/" + el.img + ".jpg"} alt='' />
                                        </div>
                                        <div className='products-content'>
                                            <h4>{el.title}</h4>
                                            <p className='text-muted'>{el.titledesc}</p>
                                            <h5>{el.price}$</h5>  
                                        </div>
                                    </div>
                                ))}
                            </Row>
                            <a href='./catalog' className='products-but'>Каталог</a>
                        </Container>
                    </Container>
                    <Container className='team>'>
                        <Row className='team-title'>
                            <Col>
                                <h1>Наша команда</h1>
                                <h5 className='text-muted'>Ми молодий український стартап</h5>
                            </Col>
                        </Row>
                        <Row>
                            {this.state.teamContent.map(el => (
                                <Col className='team-content' key={el.uniqueId}>
                                    <Col className='team-content-img-box'>
                                        <div className='team-content-img'>
                                            <img className='img' src={el.img} alt='' />
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
}