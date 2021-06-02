import React from 'react';
import Traits from "./Traits";
import img from './coin.png';
import {FaTimes, FaInfoCircle} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {deleteCard} from "./Actions/actions";

const Card = (props) => {

    const cards = useSelector(state => state.manager);
    const dispatch = useDispatch();
    return (
        <div style ={{ backgroundImage: `url(${props.card.URL})`}}>
            <div>
                <Traits traits = {props.card.Traits}/>
                <div className='single-card-interact'>
                    <a onClick={()=> dispatch(deleteCard(props.card.id))}><FaTimes/></a>
                    <a><FaInfoCircle/></a>
                </div>
            </div>
            <div className="name-coin">
                <span>{props.card.name}</span>
                <div className ="coin">
                    <img src={img} style={{width: 20 ,height: 20}}/>
                    {props.card.Price}
                </div>
            </div>
        </div>
    );

};

export default Card;
