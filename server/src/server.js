import express from 'express'
import { productsRouter } from './routes/products.js'
import { shoppingCartsRouter } from './routes/carts.js'

const { Router } = express

// later on should import the daos

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/api/products', productsRouter)
app.use('/api/shoppingCarts', shoppingCartsRouter)

export default app
