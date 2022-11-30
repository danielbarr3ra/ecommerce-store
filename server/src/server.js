import express from 'express'
import productsRouter from './routes/products.js'
import shoppingCartsRouter from './routes/carts.js'
import session from './middleware/session.js'
import passport from 'passport'

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
// TODO
/**
 * make routes static
 */

// TODO
/**
 * Add Session
 */

/**
 * Add Multer
 */

/**
 * Add Passport
 */


app.use('/api/products', productsRouter)
app.use('/api/shoppingCarts', shoppingCartsRouter)
//app.use("/profile")
//app.use("/item")
//app.use("checkout")
//app.use("/", isloggedin)

//app.all("*", validRoutesService)

export default app
