const  mongoose = require('mongoose');
const authorSchema= new mongoose.Schema({
    name:String,
    age:Number
})
module.exports = mongoose.model('Author',authorSchema)