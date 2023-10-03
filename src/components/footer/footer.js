import Container from 'react-bootstrap/Container';

import './footer.css';
import inst from './img/Ins.png'
import face from './img/face.png'
import telega from './img/telegram.png'
import email from './img/email.png'

export default function Footer() {
    return (
        <footer>
            <div className='footer-block'>
                <Container>
                    <div className='footer-content'></div>
                    <hr/>
                    <div className='footer-content-bottom d-flex'>
                        <div className='d-flex'>
                        <ul className='footer-buton'>
                            <a href='https://www.facebook.com/Greenwitch-112318907206992/'><img src={face} alt='' className='footer-img'/></a>
                        </ul>
                        <ul className='footer-buton'>
                            <a href='https://www.instagram.com/green_witch_products/'><img src={inst} alt='' className='footer-img'/></a>
                        </ul>
                        <ul className='footer-buton'>
                            <a href='https://t.me/greenwitch_app'><img src={telega} alt='' className='footer-img'/></a>
                        </ul>
                        <ul className='footer-buton'>
                            <a href='mailto:greenwitchcompanyltd@gmail.com/'><img src={email} alt='' className='footer-img'/></a>
                        </ul>
                        </div>

                        <div className="footer-copyright">
				2023 | Developed by Zagorovskii Olexii</div>
                    </div>
                </Container>
            </div>
        
        </footer>
    )
    
}