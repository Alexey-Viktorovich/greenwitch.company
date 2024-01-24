import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

import './carousel.css';
import data from '../content/content.json';

export default function CarouselHome(props) {
  let [content, setContent] = useState(data.localeUA)

  const {locale} = props;

  useEffect(() => {
      {locale ? setContent(content = data.localeUA) : setContent(content = data.localeENG)}
  })

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className='d-block w-100 fon'
          src="http://greenwitch.company/wp-content/uploads/2023/03/a5-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='context'>
            <h1>Greenwitch</h1>
            <p>{content.carusel.p}</p>
            <div className='d-flex buttons'>
                <a href="https://play.google.com/store/apps/details?id=com.greenko"
                  title=""
                  className='btn btn-primary'>Android</a>
                <a href="https://apps.apple.com/ua/app/greenwitch/id1545904233"
                  title=""
                  className='btn btn-primary btn-right no-js-color'>iOS</a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-2'>
        <img
          className="d-block w-100 fon"
          src="http://greenwitch.company/wp-content/uploads/2023/03/a4-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className='context'>
            <h1>Greenwitch</h1>
            <p>{content.carusel.p2}</p>
            <div className='d-flex buttons'>
              <NavLink className='btn btn-primary' to="/catalog">
                <Nav>{content.carusel.button}</Nav>
              </NavLink>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-3'>
        <img
          className="d-block w-100 fon"
          src="http://greenwitch.company/wp-content/uploads/2023/03/a3-1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className='context'>
            <h1>Greenwitch</h1>
            <p>{content.carusel.p3}</p>
            <div className='d-flex buttons'>
                <a href="https://t.me/greenwitch_company"
                  title=""
                  className='btn btn-primary'>Telegram</a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-4'>
        <img
          className="d-block w-100 fon"
          src="http://greenwitch.company/wp-content/uploads/2023/03/a2-1.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <div className='context'>
            <h1>Greenwitch</h1>
            <p>{content.carusel.p4}</p>
            <div className='d-flex buttons'>
                <a href="https://www.facebook.com/Greenwitch-112318907206992"
                  title=""
                  className='btn btn-primary'>Facebook</a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-5'>
        <img
          className='d-block w-100 fon'
          src="http://greenwitch.company/wp-content/uploads/2023/03/a1-1.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <div className='context'>
            <h1>Greenwitch</h1>
            <p>{content.carusel.p5}</p>
            <div className='d-flex buttons'>
              <NavLink className='btn btn-primary' to="/catalog">
                <Nav>{content.carusel.button}</Nav>
              </NavLink>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}