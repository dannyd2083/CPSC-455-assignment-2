
export const deleteCard = (id) => {
    return {
        type: 'DEL',
        payload: id
    };
};

export const addCard = (name,traits,price,url) => {
    return {
        type: 'ADD',
        payload: {name: name, traits: traits ,price: price, URL: url}
    }
}

export const deleteAll = () => {
    return{
        type: "DELALL"
    }
}

export const reload = () => {
    return{
        type:"RELOAD"
    }
}