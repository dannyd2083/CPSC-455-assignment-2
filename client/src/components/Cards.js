import React from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";

const Cards = () => {
    const cards = useSelector(state => state.cardManagerReducer)
    return (
        <div className='current-card-div'>
            {cards.map((card)=>
                (<Card key = {card._id} card = {card} />))}
        </div>
    );
};




export default Cards;
