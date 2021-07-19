import axios from "axios";

export const deleteCard = (id) => {
    return {
        type: 'DEL',
        payload: id
    };
};

// export const addCard = (name,traits,price,url) => {
//     return {
//         type: 'ADD',
//         payload: {name: name, traits: traits ,price: price, URL: url}
//     }
// }

export const addCard = (payload) => {
    return {
        type: 'ADD',
        payload: payload
    }
}

export const deleteAll = () => {
    return{
        type: "DELALL"
    }
}


export const reload = (payload) =>{
    return{
        type: "RELOAD",
        payload: payload
    }
}

//
//     fetch('http://localhost:5000/')
//         .then(res => res.json())
//         .then(cards => x ({type: 'RELOAD',payload:cards }))
// }