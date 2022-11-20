// TODO add await for teh seeding this will suffice tho.

import { faker } from '@faker-js/faker'

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

const seedDatabse = () => {
    connect();

    let productsToBeAdded = generateNProducts(10);
    let cartsToBeAdded = generateNCarts(5)

    let productsModel = mongoose.model('products', productSchema)
    let cartNodel = mongoose.model('carts', cartSchema)

    for (let i = 0; i < productsToBeAdded.length; i++) {
        productsModel.create(productsToBeAdded[i]);
    }
    for (let i = 0; i < cartsToBeAdded.length; i++) {
        cartNodel.create(cartsToBeAdded[i]);
    }

}

const generateFakeProduct = () => {
    let thumbnail = 'wwww.fakeThuhmbnail.something'
    let price = faker.commerce.price()
    let timeStamp = faker.date.between()
    let id = faker.random.numeric(5)
    let name = faker.commerce.productName()
    return {
        title: name,
        thumbnail,
        price,
        id,
        timeStamp,
    }
}

const generateNProducts = (n) => {
    let products = []
    for (let i = 0; i < n; i++) {
        let randomP = generateFakeProduct();
        products.push(randomP)
    }
    return products;
}

const generateFakeCart = (productsArray) => {
    let products = [...productsArray]
    let timeStamp = faker.date.between()
    let id = faker.random.numeric(5)
    return {
        id,
        timeStamp,
        products,
    }
}

const generateNCarts = (n) => {
    let carts = []
    for (let i = 0; i < n; i++) {
        let producstOfCart = generateNProducts(3);
        let cartGenerated = generateFakeCart(producstOfCart);
        carts.push(cartGenerated)
    }
    return carts;
}

console.log('seeding the database')
seedDatabse();
console.log('seeding complete')