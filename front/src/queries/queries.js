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

export {getCars,getModel,addCarsMutation};