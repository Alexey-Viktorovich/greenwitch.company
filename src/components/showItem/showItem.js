import { Component } from "react";
import Container from 'react-bootstrap/Container';
import { RiCloseCircleFill } from "react-icons/ri"

import './showItem.css';

export default class ShowItem extends Component {
    
    render() {
        return (
            <div className='show-item'>
                <div className="none" onClick={() => this.props.onShowItem(this.props.item)}></div>
                <div className="show-item-block">
                    <Container className='show-item-card'>
                        <Container className='show-item-block-img'>
                            <div className='show-item-img'>
                                <img src={"./img/" + this.props.item.img + ".jpg"} alt='' />
                                <img src={"./img/" + this.props.item.img1 + ".jpg"} alt='' />
                                <img src={"./img/" + this.props.item.img2 + ".jpg"} alt='' />
                            </div>
                            <RiCloseCircleFill className="close-show-item" onClick={() => this.props.onShowItem(this.props.item)}/>
                        </Container>
                        <Container>
                            <div>
                                <h5>{this.props.item.title}</h5>
                                <p className='text-muted'>{this.props.item.titledesc}</p>
                            </div>
                            <div className="desc">
                                    <p>{this.props.item.descp1}</p>
                                    <p>{this.props.item.descTextTitle}
                                        {this.props.item.descText}
                                        <br/>{this.props.item.descText1}
                                        <br/>{this.props.item.descText2}
                                        <br/>{this.props.item.descText3}
                                        <br/>{this.props.item.descText4}
                                        <br/>{this.props.item.descText5}
                                        <br/>{this.props.item.descText6}
                                    </p>
                                    <p>{this.props.item.descTextTitle1}
                                        <br/>{this.props.item.descText7}
                                        <br/>{this.props.item.descText8}
                                        <br/>{this.props.item.descText9}
                                        <br/>{this.props.item.descText10}
                                    </p>
                            </div>
                        </Container>
                        <Container className='show-item-content d-flex'>
                            <h5><b>{this.props.item.price}$</b></h5>  
                            <div className='show-item-add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                        </Container>
                    </Container>
                </div>

            </div>
        )
    }
}