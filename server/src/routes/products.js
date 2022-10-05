import { express } from "express";
const { Router } = express;

import { productsDao as ProductsApi } from "../daos/index";

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

export default productsRouter
