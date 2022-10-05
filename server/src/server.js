import express from 'express'
import {
    productsDao as ProductsApi,
    cartsDao as CartsApi
} from './daos/index.js'

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
    console.log('getting all the elements')
    const allProducts = await ProductsApi.getAll();
    res.json(allProducts)
})


productsRouter.get('/:id', async (req, res) => {
    console.log('getting the product by id')
    const id = req.params.id;
    const item = await ProductsApi.get(id);
    console.log(` serched  id is ${id}  and the body of the elemnt is ${item}`)
    res.json(item)
})


productsRouter.post('/', onlyAdmin, async (req, res) => {
    console.log('testing posting a product router')
    console.log(`THE BODY BEING SAVED IS ${JSON.stringify(req.body)}`)
    const obj = await ProductsApi.save(req.body)
    console.log(`the object was save ${obj}`)
    res.json(obj)
})


productsRouter.put('/:id', onlyAdmin, async (req, res) => {
    console.log('testing updating the product router')
    const id = req.params.id;
    const obj = req.body;
    const updated = await ProductsApi.update(id, obj);
    res.json(updated)
})


productsRouter.delete('/:id', onlyAdmin, async (req, res) => {
    console.log('testing the product is deleted')
    const id = req.params.id;
    const item = await ProductsApi.get(id)
    await ProductsApi.delete(id)
    res.json(item)
})


/**
 * TODO add the cart ones and the product within cart ones
 * 
 */

const shoppingCartsRouter = new Router()


shoppingCartsRouter.get('/', async (req, res) => {
    console.log('testing the getting all the carts')
    const allCarts = await CartsApi.getAll();
    res.json(allCarts)
})

shoppingCartsRouter.post('/', async (req, res) => {
    console.log('testing adding a new cart')
    const obj = req.body;
    const added = await CartsApi.save(obj)
    res.json(added);
})


shoppingCartsRouter.delete('/:id', async (req, res) => {
    console.log('deleting a certain cart from the list')
    const id = req.params.id
    const deleted = await CartsApi.delete(id)
    res.json(deleted)
})

//Products within the CAST


shoppingCartsRouter.get('/:id/products', async (req, res) => {
    console.log('testing the getting all the carts')
    res.json([])
})


shoppingCartsRouter.post('/:id/products', async (req, res) => {
    console.log('testing the getting all the carts')
    res.json([])
})


shoppingCartsRouter.delete('/:id/products/:idProd', async (req, res) => {
    console.log('testing the getting all the carts')
    res.json([])
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/api/products', productsRouter)
app.use('/api/shoppingCarts', shoppingCartsRouter)

export default app
