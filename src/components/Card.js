import React, {useState} from 'react';
import Traits from "./Traits";
import img from './coin.png';
import {FaTimes, FaInfoCircle} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {deleteCard} from "./Actions/actions";
import Popup from "./Popup";
import axios from "axios";

const Card = (props) => {
    const dispatch = useDispatch();
    const [popModel,setPopModel] = useState(false);
    const [imgURL, setURL] = useState(undefined);
    const [cardDate, setDate] = useState(undefined);


    const openPopup = async (id) => {
        setPopModel(prev => !prev);
        const params = {
            cardId: id
        }
        console.log(params)
        const URLres = await axios.get('http://localhost:5000/img', {params})
        const DateRes= await axios.get('http://localhost:5000/date', {params})
        console.log(URLres.data)
        setURL(URLres.data.URL);
        setDate(DateRes.data.Date);
        console.log(imgURL);
    }

    const onDelete = async () => {
        console.log(props.card._id);
        let payload = {id: props.card._id}
        await axios.post('http://localhost:5000/delete',payload);
        dispatch(deleteCard(props.card._id))
    }

    return (
        <div style ={{ backgroundImage: `url(${props.card.URL})`}}>
            <div>
                <Traits traits = {props.card.Traits}/>
                <div className='single-card-interact'>
                    <a onClick={()=> onDelete()}><FaTimes/></a>
                    <a onClick={() => openPopup(props.card._id)}> <FaInfoCircle/></a>
                    <Popup popModel = {popModel} setPopModel = {setPopModel}  image = {imgURL} date = {cardDate}/>
                </div>
            </div>
            <div className="name-coin">
                <span>{props.card.name}</span>
                <div className ="coin">
                    <img src={img} alt = "coin" style={{width: 20 ,height: 20}}/>
                    {props.card.Price}
                </div>
            </div>
        </div>
    );

};

export default Card;
