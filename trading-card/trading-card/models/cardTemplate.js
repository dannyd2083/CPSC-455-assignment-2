const mongoose = require('mongoose')



const CardSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    Traits: {type:Array, required: true},
    Price: {type: String, required: true},
    URL: {type: String, required:true}
},{ collection : 'cards' })

const  model = mongoose.model('CardModel', CardSchema )


module.exports = model