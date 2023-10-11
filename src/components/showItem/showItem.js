// import { Component } from "react";
import Container from 'react-bootstrap/Container';
import { RiCloseCircleFill } from "react-icons/ri"

import './showItem.css';

export default function ShowItem(props) {
    return (
        <div className='show-item'>
            <div className="none" onClick={() => props.onShowItem(props.item)}></div>
            <div className="show-item-block">
                <Container className='show-item-card'>
                    <Container className='show-item-block-img'>
                        <div className='show-item-img'>
                            <img src={"./img/" + props.item.img + ".png"} alt='' />
                            <img src={"./img/" + props.item.img1 + ".png"} alt='' />
                            <img src={"./img/" + props.item.img2 + ".png"} alt='' />
                        </div>
                        <RiCloseCircleFill className="close-show-item" onClick={() => props.onShowItem(props.item)}/>
                    </Container>
                    <Container>
                        <div>
                            <h5>{props.item.title}</h5>
                            <p className='text-muted'>{props.item.titledesc}</p>
                        </div>
                        <div className="desc">
                                <p>{props.item.descp1}</p>
                                <p>{props.item.descTextTitle}
                                    {props.item.descText}
                                    <br/>{props.item.descText1}
                                    <br/>{props.item.descText2}
                                    <br/>{props.item.descText3}
                                    <br/>{props.item.descText4}
                                    <br/>{props.item.descText5}
                                    <br/>{props.item.descText6}
                                </p>
                                <p>{props.item.descTextTitle1}
                                    <br/>{props.item.descText7}
                                    <br/>{props.item.descText8}
                                    <br/>{props.item.descText9}
                                    <br/>{props.item.descText10}
                                </p>
                        </div>
                    </Container>
                    <Container className='show-item-content d-flex'>
                        <h5><b>{props.item.price}$</b></h5>  
                        <div className='show-item-add-to-cart' onClick={() => props.onAdd(props.item)}>+</div>
                    </Container>
                </Container>
            </div>
        </div>
    )
}