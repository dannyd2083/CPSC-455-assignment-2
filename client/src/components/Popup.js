import React from 'react';
import {FaTimes} from "react-icons/fa";

function Popup ({popModel,setPopModel,image,date}){

    console.log("ImageURL at popup "+ image);

    return <>{popModel ? <div className= 'popup'>
        <h3>The image link is </h3>
        {image}
        <h3>Create date</h3>
        {date}
        <a onClick={()=> setPopModel(prev =>!prev)}><FaTimes/></a>
    </div> : null}</>
}
export default Popup;
