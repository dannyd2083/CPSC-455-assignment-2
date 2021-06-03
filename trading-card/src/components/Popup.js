import React from 'react';
import {deleteCard} from "./Actions/actions";
import {FaTimes} from "react-icons/fa";

function Popup ({popModel,setPopModel,image}){
    return <>{popModel ? <div className= 'popup'>
        <h3>The image link is </h3>
        {image}
        <a onClick={()=> setPopModel(prev =>!prev)}><FaTimes/></a>

    </div> : null}</>
}
export default Popup;
