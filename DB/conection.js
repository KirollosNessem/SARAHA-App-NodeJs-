const mongoose = require('mongoose');
require('dotenv').config();


const conectDB = ()=>{
   return mongoose.connect(process.env.databaseurl)
   .then(() => console.log('MongoDB Connected...'))
}
module.exports = conectDB