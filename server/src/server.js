import express from 'express'
const { Router } = express

// later on should import the daos

const app = express()

const isAdmin = true

const credentialError = (path, method) => {
    const errorObj = {
        error: -1,
    }
    if (path && method) {
        errorObj.description = `the path ${path} method ${method} is not authorized`
    } else {
        errorObj.description = 'not authorized'
    }
    return errorObj
}

const onlyAdmin = (req, res, next) => {
    // should be used whene deleteting items or updatingin them 
    if (!isAdmin) {
        res.json(credentialError)
    } else {
        next()
    }
}

const productsRouter = new Router()

productsRouter.get('/', async (req, res) => {
    console.log('testing the product router')
    res.json([])
})

const shoppingCartsRouter = new Router()
shoppingCartsRouter.get('/', async (req, res) => {
    console.log('testing the product router')
    res.json([])
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/api/products', productsRouter)
app.use('/api/shoppingCarts', shoppingCartsRouter)

export default app
