//
// let aatroxString = '{"id": "1", "name": "Aatrox", "Traits": ["Redeemed", "Legionnaire"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/aatrox.jpg"}';
// let gragasString = '{"id": "2", "name": "Gragas", "Traits": ["Dawnbringer", "Brawler"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/gragas.jpg"}';
// let leonaString =  '{"id": "3", "name": "Lenoa", "Traits": ["Redeemed", "Knight"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/leona.jpg"}';
// let kalistaString = '{"id": "4", "name": "Kalista", "Traits": ["Abomination", "Legionnaire"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/kalista.jpg"}';
// let khazixString = '{"id": "5", "name": "KhaZix", "Traits": ["Dawnbringer", "Assassin"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/khazix.jpg"}';
// let kledString = '{"id": "6", "name": "Kled", "Traits": ["Hellion", "Cavalier"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/kled.jpg"}';
// let lissandraString = '{"id": "7", "name": "Lissandra", "Traits": ["Coven", "Renewer"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/lissandra.jpg"}';
// let poppyString = '{"id": "8", "name": "Poppy", "Traits": ["Hellion", "Knight"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/poppy.jpg"}';
// let udyrString = '{"id": "9", "name": "Udyr", "Traits": ["Draconic", "Skirmisher"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/udyr.jpg"}';
// let vayneString = '{"id": "10", "name": "Vayne", "Traits": ["Forgotten", "Ranger"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/vayne.jpg"}';
// let vladimirString = '{"id": "11", "name": "Vladimir", "Traits": ["Nightbringer", "Renewer"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/vladimir.jpg"}';
// let warwickString = '{"id": "12", "name": "Warwick", "Traits": ["Forgotten", "Brawler"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/warwick.jpg"}';
// let ziggsString = '{"id": "13", "name": "Ziggs", "Traits": ["Dawnbringer", "Assassin"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/ziggs.jpg"}';
//
// let aatrox = JSON.parse(aatroxString);
// let gragas = JSON.parse(gragasString);
// let leona = JSON.parse(leonaString);
// let kalista = JSON.parse(kalistaString);
// let khazix = JSON.parse(khazixString);
// let kled = JSON.parse(kledString);
// let lissandra = JSON.parse(lissandraString);
// let poppy = JSON.parse(poppyString);
// let udyr = JSON.parse(udyrString);
// let vayne = JSON.parse(vayneString);
// let vladimir = JSON.parse(vladimirString);
// let warwick = JSON.parse(warwickString);
// let ziggs = JSON.parse(ziggsString);
//
// const initialCardArray = []
//
// initialCardArray.push(aatrox,gragas,leona,kalista,khazix,kled,lissandra,poppy,udyr,vayne,vladimir,warwick,ziggs)


// const initialCardArray = fetch('/');

const makeNewCard = (name,traits,price,url) => {
    let traitsArray = traits.split(',')
    const newCard = {
        id: Date.now(),
        name: name,
        Traits: traitsArray,
        price: price,
        URL:url
    }
    return newCard
}


const cardManagerReducer = (cardState = [] , action) =>{
    switch (action.type) {
        case 'ADD' :
            let newCard = makeNewCard(action.payload.name,action.payload.traits,action.payload.price,action.payload.URL);
            let newState = cardState.concat(newCard);
            return newState;
        case 'DEL' :
            return cardState.filter((card) => (card.id !== action.payload))
        case 'RELOAD':
            return [];
        case 'DELALL':
            return [];
        default :
            return cardState;
    }
};

export default cardManagerReducer;