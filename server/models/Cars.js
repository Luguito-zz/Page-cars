const mongoonse = require('mongoose');
const Schema = mongoonse.Schema;
const Models = require('./Models.js')

const carModels = new Schema({
    name:String,
    price:Number,
    model:{type: Schema.Types.ObjectId, ref:'Models'}
})

module.exports = mongoonse.model('Car', carModels);