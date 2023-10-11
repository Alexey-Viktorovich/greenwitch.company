import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import HeaderFone from '../headerFone/headerFoneAbout';
import '../page-css/about.css';

export default function About() {
    return(
        <Container className='about' fluid>
            <HeaderFone />
            <div className='about-text'>
                <Container className='text'>
                    <Row>
                        <h3><b>Greenwitch – це мобільний додаток для віддаленого моніторингу росту всіх типів рослин. Ви можете використовувати такі функції:</b></h3>
                        <div>
                            <ul>
                                <li>показники датчиків рівня освітлення, температури, вологості ґрунту і повітря</li>
                                <li>автоматичне або ручне керування поливом , освітленням, вентиляцією та обігрівом</li>
                                <li>камера спостереження</li>
                                <li>рекомендації по догляду</li>
                                <li>можливість перепрошивки плати</li>
                                <li>можливість створювати, редагувати і переглядати щоденні повторювані події.</li>
                                <li>щоденні звіти по догляду за рослинами за минулий день</li>
                            </ul>
                        </div>
                        <p>Додаток покаже вам дані і графіки за обраний період часу, підкаже які кроки зробити для забезпечення сприятливого росту ваших рослин.</p>
                    </Row>
                </Container>
            </div>
        </Container>
    )
}