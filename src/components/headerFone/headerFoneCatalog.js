import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import './headerFone.css';
import data from '../content/content.json';

export default function HeaderFoneCatalog(props) {
  let [content, setContent] = useState(data.localeUA)

  const {locale} = props;

  useEffect(() => {
      {locale ? setContent(content = data.localeUA) : setContent(content = data.localeENG)}
  })

  return (
    <Container className='fone-block'>
      <div className='content'></div>
      <div className='content-text'>
        <h1>{content.headerfone.catalog}</h1>
      </div>
    </Container>
  )
}