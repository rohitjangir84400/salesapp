/* model schema to store user in database */
const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    productname:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true,
    },
    amount:{
        type:Number,
        require:true,
    },
});

const Entyrdata = mongoose.model('Entrydata',entrySchema);
module.exports=Entyrdata;