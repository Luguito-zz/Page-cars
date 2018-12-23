const graphql = require('graphql');
const _ = require('lodash');
const Car = require('../models/Cars');
const Model = require('../models/Models');

//Dummy Data
/*let cars = [
    {name:'Volvo', id:'1', price:2000},
    {name:'Mercedes', id:'2', price:3000},
    {name:'Gorilla', id:'3', price:4000},
    {name:'Luguitoo', id:'4', price:5000},
    {name:'Tesla', id:'5', price:6000},
    
]*/


const {GraphQLObjectType,
       GraphQLSchema, 
       GraphQLID,
       GraphQLString,
       GraphQLInt,
       GraphQLList,
       GraphQLNonNull,
       GraphQLEnumType } = graphql


const CarsType = new GraphQLObjectType({
    name:'Cars',
    fields: () =>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        price:{type:GraphQLInt},
        models:{
            type:CarsModel,
            resolve(parent,args){
                return Model.findById(parent.model)
            }
        }
    })
})


const CarsModel = new GraphQLObjectType({
    name:'Model',
    fields: () =>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        cars:{
            type:new GraphQLList(CarsType),
            resolve(parent,args){
                return Car.find({model:parent.id})
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        cars:{
            type: new GraphQLList(CarsType),
            resolve(parent,args){
                return Car.find({})
            }
        },
        car:{
            type:CarsType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Car.findById(args.id)
            }
        },
        models:{
            type:new GraphQLList(CarsModel),
            resolve(parent,args){
                return Model.find({})
            }
        }
    },
});

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addCars:{
            type:CarsType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                price:{type:new GraphQLNonNull(GraphQLInt)},
                model:{type:new GraphQLNonNull(GraphQLID)},
            },
            resolve(parent,args){
                let car = new Car({
                    name: args.name,
                    price: args.price,
                    model:args.model  
                });
                return car.save()
            }
        },
        addModel:{
            type:CarsModel,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent,args){
                let model = new Model({
                    name:args.name
                });
                return model.save()
            }
        },
        updateCar:{
            type:CarsType,
            args:{
                id:{type:GraphQLID},
                name:{type:GraphQLString},
            },
            async resolve(parent,args){
                let update = {
                    name: args.name
                }
                let updateCar = await Car.findByIdAndUpdate({_id:args.id}, update, (err, res)=>{
                    if(err){
                        console.log(err)
                    }
                }) 
            }
        },
        deleteCar:{
            type:CarsType,
            args:{
                id:{type:GraphQLID}
            },
            resolve(parent,args){
                const deleted = Car.findByIdAndDelete(args.id).exec();
                if (!deleted) {
                    throw new Error('Error')
                  }
                  return deleted;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation,
})