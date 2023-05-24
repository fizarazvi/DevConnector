const mongoose = require("mongoose");
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    try{
        //returns a promise
        await mongoose.connect(db,{
            useNewUrlParser: true,
        });
        console.log('MongoDB connected......');
    }catch(err){
        console.error(err.message);
        //Exit
        process.exit(1);
    }
}

module.exports = connectDB;
