import React, {useState} from 'react';
import Traits from "./Traits";
import img from './coin.png';
import {FaTimes, FaInfoCircle} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {deleteCard} from "./Actions/actions";
import Popup from "./Popup";
import axios from "axios";


let ImageArray = []
let imgURL

const Card = (props) => {
    const dispatch = useDispatch();
    const [popModel,setPopModel] = useState(false);


    const openPopup = async (id) => {
        setPopModel(prev => !prev);
        const params = {
            cardId: id
        }
        console.log(params)
        const res = await axios.get('http://localhost:5000/img', {params})
        console.log(res.data)
        imgURL = res.data.URL;
        console.log(imgURL);
    }

    const onDelete = async () => {
        console.log(props.card._id);
        await axios.delete('http://localhost:5000/',{ data: { id: props.card._id } });
        dispatch(deleteCard(props.card._id))
    }

    return (
        <div style ={{ backgroundImage: `url(${props.card.URL})`}}>
            <div>
                <Traits traits = {props.card.Traits}/>
                <div className='single-card-interact'>
                    <a onClick={()=> onDelete()}><FaTimes/></a>
                    <a onClick={() => openPopup(props.card._id)}> <FaInfoCircle/></a>
                    <Popup popModel = {popModel} setPopModel = {setPopModel} image = {imgURL}/>
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
