import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addCard, deleteAll} from "./Actions/actions";
import axios from "axios";

const Form = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [traits,setTraits] = useState();
    const [price, setPrice] = useState();
    const [url,setURL] = useState();
    const [imgErr, setImageErr] = useState({});

    const onSubmit = async (event) => {
        event.preventDefault();
        const isValid = formValidation();
        console.log(isValid);
        if (name && traits && price && url && isValid) {
            let traitsArray = traits.split(',')
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            let payload = {
                name: name,
                Traits: traitsArray,
                Price: price,
                URL:url,
                Date: date
            }
             await axios.post('/', payload);
             const res = await axios.get('/');
            // dispatch(addCard(name, traits, price, url));
            dispatch(addCard(res.data))
        }
    }

    const formValidation = () =>{
        const imgErr = {};
        let isValid = true;
        let bool = checkImage(url)
        console.log(bool);
        if (bool === false){
            imgErr.invalid = "Invalid URL"
            isValid = false;
            console.log("hello")
        }
        setImageErr(imgErr);
        return isValid
    }

    function checkImage(url) {
        let http = new XMLHttpRequest();
        http.open('HEAD',url,false);
        http.send();
        return http.status !== 404;
    }

    const onDeleteAll = () => {
        dispatch(deleteAll());
        // console.log("hello");
    }

    // const onReload = async () => {
    //     const response = await axios.get('http://localhost:5000/');
    //     console.log("response: " + response.data);
    //     dispatch(reload(response.data))
    // }

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
                {Object.keys(imgErr).map((key)=>{return <div style={{color : "white"}}> {imgErr[key]} </div> })}
                <input type="submit" value="Submit" id="submit"/>
            </form>
                {/*<input type="reset" id="reset-form"/>*/}
                <label for="DeleteAll" id="DeleteAllLabel">Delete All Card:</label>
                <button onClick={()=>onDeleteAll()} value="delete" id="DeleteAll">  Delete All </button>
                {/*<label for="Reload" id="ReloadInitial">Reload:</label>*/}
                {/*<button onClick={()=>onReload()} value="Reload" id="Reload"> Reload </button>*/}

        </div>
    );
};

export default Form;
