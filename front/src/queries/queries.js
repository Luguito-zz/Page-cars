import {gql} from 'apollo-boost';

const getCars = gql` 
    {
        cars{
            id
            name
            price
            models{
                id
                name
            }
        }
    }
`

const getModel = gql`
    {
        models{
            id
            name
            cars{
                name
            }
        }
    }
`

const addCarsMutation = gql`
    mutation($name:String!,$price:Int!,$model:ID!){
        addCars(name:$name,price:$price,model:$model){
            name
            id
        }
    }
`

const deletedCar = gql`
    mutation($id:ID!){
        deletedCar(id:$id){
            name
        }
    }
`

const updateCar = gql`
    mutation($id:ID!,$name:String!,$price:Int!){
        updateCar(name:$name,price:$price){
            name
        }
    }
`

export {getCars,getModel,addCarsMutation,deletedCar,updateCar};