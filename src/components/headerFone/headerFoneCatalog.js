import { Component } from 'react';
import { Container } from 'react-bootstrap';

import './headerFone.css';

export default class HeaderFone extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: []
    }
  }

  render() {
    return (
      <Container className='fone-block'>
        <div className='content'></div>
        <div className='content-text'>
          <h1>Каталог</h1>
        </div>
      </Container>
    );
  }
}