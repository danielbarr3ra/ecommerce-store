import { productSchema, cartSchema } from '../schemas/schemas.js'
import mongoose, { mongo } from 'mongoose'
import * as dotevn from 'dotenv'


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
dotevn.config();

let connectionString = process.env.MONGOBD_CONNECTION_STRING || 'mongodb+srv://admin:admincoderhouse@cluster0.yd2s1uu.mongodb.net/?retryWrites=true&w=majority'

const connect = () => {
    try {
        console.log('tryign to connect to seed the database for development')
        mongoose.connect(connectionString, options)
        console.log('connection succesful')
    } catch (error) {
        console.log('not ')
        console.log(connectionString)
        console.log(error)
    }
    console.log('connection succesful')
}

const disconnect = () => {
    console.log('disconnecting')
    mongoose.disconnect()
}

const deleteItemsOfDB = () => {
    connect();

    let productsModel = mongoose.model('prodproducstsucst', productSchema)
    let cartNodel = mongoose.model('carts', cartSchema)

    productsModel.deleteMany({});
    cartNodel.deleteMany({})
}

console.log('deleting the database')
deleteItemsOfDB();
console.log('deleting complete')
disconnect();