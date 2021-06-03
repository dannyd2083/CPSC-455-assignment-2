import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addCard, deleteAll, reload} from "./Actions/actions";

const Form = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [traits,setTraits] = useState();
    const [price, setPrice] = useState();
    const [url,setURL] = useState();

    const onSubmit = (event) => {
        event.preventDefault();
        if(name && traits && price && url) {
            dispatch(addCard(name,traits,price,url));
        }
    }

    const onDeleteAll = () => {
        dispatch(deleteAll());
        // console.log("hello");
    }

    const onReload = () => {
        dispatch(reload());
    }

    return (
        <div className='addCard-div'>
            <h2>Add Card</h2>
            <form onSubmit={onSubmit} id="userInput" className="card-form">
                <label for="Name">Name:</label>
                <input type="text" id="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label for="Traits">Traits:</label>
                <input type="text" id="Traits" name="traits" value={traits} onChange={(e) => setTraits(e.target.value)}/>
                <label for="Price"> Price: </label>
                <input type="number" id="Price" name="price" min="1" max="5" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <label for="URL"> Image URL: </label>
                <input type="url" id="URL" name="url" value={url} onChange={(e) => setURL(e.target.value)}/>
                <input type="submit" value="Submit" id="submit"/>
                <input type="reset" id="reset-form"/>
                <label for="DeleteAll" id="DeleteAllLabel">Delete All Card:</label>
                <button onClick={()=>onDeleteAll()} value="delete" id="DeleteAll">  Delete All </button>
                <label for="Reload" id="ReloadInitial">Reload:</label>
                <button onClick={()=>onReload()} value="Reload" id="Reload"> Reload </button>
            </form>
        </div>
    );
};

export default Form;
