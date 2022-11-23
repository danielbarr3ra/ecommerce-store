import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    id: { type: Number, required: true },
    timeStamp: { type: Date },
})

const cartSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    timestamp: { type: Date },
    products: { type: [] },
})

const userData = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    age: { type: String, required: true },
    phone: { type: String, required: true },

})
export { cartSchema, productSchema }