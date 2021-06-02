import React from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";
import {useDispatch} from "react-redux";
import {deleteCard} from "./Actions/actions";

const Cards = () => {
    const cards = useSelector(state => state.manager)
    return (
        <div className='current-card-div'>
            {cards.map((card)=>
                (<Card key = {card.name} card = {card} />))}
        </div>
    );
};




export default Cards;
