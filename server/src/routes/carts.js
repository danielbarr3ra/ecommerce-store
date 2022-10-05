import { express } from "express";
const { Router } = express;

import { cartsDao as CartsApi } from "../daos/index";

const shoppingCartsRouter = new Router()


shoppingCartsRouter.get('/', async (req, res) => {
    console.log('testing the getting all the carts')
    const allCarts = await CartsApi.getAll();
    res.json(allCarts)
})

shoppingCartsRouter.post('/', async (req, res) => {
    console.log('testing adding a new cart')
    const obj = req.body;
    if (!obj.products) {
        obj.products = [];
    }
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
    console.log('testing the getting items of the carts')
    const cartId = req.params.id
    const cart = await CartsApi.get(cartId)
    const products = cart?.products ?? []
    res.json(products)
})


shoppingCartsRouter.post('/:id/products', async (req, res) => {
    console.log('testing adding items to the cart')
    const cartId = req.params.id
    const addedItem = req.body
    const cart = await CartsApi.get(cartId)
    cart.products.push(addedItem)
    await CartsApi.update(cartId, cart)
    res.json(cart)
})


shoppingCartsRouter.delete('/:id/products/:idProd', async (req, res) => {
    console.log('testing deleting the products of carts')
    const cartId = req.params.id
    const prodId = req.params.idProd
    const cart = await CartsApi.get(cartId)
    const updatedProdList = cart.products.filter((prod) => {
        return prod.id != parseInt(prodId)
    })
    cart.products = updatedProdList
    await CartsApi.update(cartId, cart)
    res.json(cart)
})

export default shoppingCartsRouter