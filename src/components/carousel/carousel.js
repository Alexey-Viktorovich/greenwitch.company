import Carousel from 'react-bootstrap/Carousel';

import './carousel.css';

export default function CarouselHome() {
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
            <p>Завантажуй мобільний додаток та вирощуй здорові рослини без зайвих зусиль</p>
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
            <p>Купуй додаткову продукцію та розширюй свої можливості керування</p>
            <div className='d-flex buttons'>
                <a href="/shop/"
                  title=""
                  className='btn btn-primary'>Замовити</a>
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
            <p>Піднімай свій досвід вирощування на новий рівень</p>
            <div className='d-flex buttons'>
                <a href="https://t.me/greenwitch_app"
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
            <p>Принось нам свій гроубокс та ми прокачаємо його на повну</p>
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
            <p>Купуй нашу круту лампу та отримуй в 2 рази більше врожаю</p>
            <div className='d-flex buttons'>
                <a href="/shop/"
                  title=""
                  className='btn btn-primary'>Замовити</a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}