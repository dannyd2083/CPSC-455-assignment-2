import React from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";

const Cards = () => {
    const cards = useSelector(state => state.manager)
    return (
        <div className='current-card-div'>
            {cards.map((card)=>
                (<Card key = {card.id} card = {card} />))}
        </div>
    );
};




export default Cards;
