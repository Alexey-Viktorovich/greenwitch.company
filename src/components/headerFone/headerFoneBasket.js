import { Container } from 'react-bootstrap';

import './headerFone.css';

export default function HeaderFone() {
  return (
    <Container className='fone-block'>
      <div className='content'></div>
      <div className='content-text'>
        <h1>Кошик</h1>
      </div>
    </Container>
  )
}