const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const graphqlHTTP= require('express-graphql');
const schema = require('./schema/schema');

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))


mongoose.connect('mongodb://localhost:27017/page-cars',{useNewUrlParser:true})
.then(console.log('MongoDB Connect Success'))
.catch((err)=> console.log(err))

app.listen(4000, ()=>{
console.log('Server Express Online ')
})
