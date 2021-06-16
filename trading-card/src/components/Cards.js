import React from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";
import cardManagerReducer from "./Reducers/cardManager";

const Cards = () => {
    const cards = useSelector(state => state.cardManagerReducer)
    return (
        <div className='current-card-div'>
            {cards.map((card)=>
                (<Card key = {card.id} card = {card} />))}
        </div>
    );
};




export default Cards;
