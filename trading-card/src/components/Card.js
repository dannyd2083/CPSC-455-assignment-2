import React from 'react';
import Traits from "./Traits";
import img from './coin.png';

const Card = (props) => {

    return (
        <div style ={{ backgroundImage: `url(${props.card.URL})`}}>
            <div>
                <Traits traits = {props.card.Traits}/>
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
