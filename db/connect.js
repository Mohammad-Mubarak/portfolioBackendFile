const mongoose = require('mongoose');
require("dotenv").config()


const mongo_url=process.env.MONGODB_URL
mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(response=>{
    console.log('MongoDB Connection Succeeded.')
}).catch(error=>{
    console.log('Error in DB connection: ' + error)
});


exports.module = mongoose;