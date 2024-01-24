import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import './headerFone.css';
import data from '../content/content.json';

export default function HeaderFoneAbout(props) {
  let [content, setContent] = useState(data.localeUA)

  const {locale} = props;

  useEffect(() => {
      {locale ? setContent(content = data.localeUA) : setContent(content = data.localeENG)}
  })

  return (
    <Container className='fone-block'>
      <div className='content'></div>
      <div className='content-text'>
        <h1>{content.headerfone.about}</h1>
      </div>
    </Container>
  )
}