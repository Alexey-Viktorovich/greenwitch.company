import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import HeaderFoneAbout from '../headerFone/headerFoneAbout';
import '../page-css/about.css';
import data from '../content/content.json';

export default function About(props) {
    let [content, setContent] = useState(data.localeUA)

    const {locale} = props;

    useEffect(() => {
        {locale ? setContent(content = data.localeUA) : setContent(content = data.localeENG)}
    })

    return(
        <Container className='about' fluid>
            <HeaderFoneAbout locale={props.locale} />
            <div className='about-text'>
                <Container className='text'>
                    <Row>
                        <h3><b>{content.aboutpage.h3}</b></h3>
                        <div>
                            <ul>
                                <li>{content.aboutpage.li}</li>
                                <li>{content.aboutpage.li1}</li>
                                <li>{content.aboutpage.li2}</li>
                                <li>{content.aboutpage.li3}</li>
                                <li>{content.aboutpage.li4}</li>
                                <li>{content.aboutpage.li5}</li>
                                <li>{content.aboutpage.li6}</li>
                            </ul>
                        </div>
                        <p>{content.aboutpage.p}</p>
                    </Row>
                </Container>
            </div>
        </Container>
    )
}