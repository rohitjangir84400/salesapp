/* mongodb connection */
const mongoose = require('mongoose');
require('dotenv').config()
const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
            if(!connect){
                console.warn("db not connected")
            }else{
                console.warn("db connected");
            }
    } catch (error) {
        console.warn(error);
    }
}

module.exports = connectDB;