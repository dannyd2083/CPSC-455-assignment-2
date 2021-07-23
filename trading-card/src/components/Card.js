import React, {useState} from 'react';
import Traits from "./Traits";
import img from './coin.png';
import {FaTimes, FaInfoCircle} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {deleteCard} from "./Actions/actions";
import Popup from "./Popup";
const Card = (props) => {
    const dispatch = useDispatch();
    const [popModel,setPopModel] = useState(false);

    const openPopup = () => {
        setPopModel(prev =>!prev);
    }
    return (
        <div style ={{ backgroundImage: `url(${props.card.URL})`}}>
            <div>
                <Traits traits = {props.card.Traits}/>
                <div className='single-card-interact'>
                    <a onClick={()=> dispatch(deleteCard(props.card.id))}><FaTimes/></a>
                    <a onClick={openPopup}> <FaInfoCircle/></a>
                    <Popup popModel = {popModel} setPopModel = {setPopModel} image = {props.card.URL}/>
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