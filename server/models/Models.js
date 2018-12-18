const mongoonse = require('mongoose');
const Schema = mongoonse.Schema;

const modelsCar = new Schema({
    name:String
})

module.exports = mongoonse.model('Models', modelsCar);