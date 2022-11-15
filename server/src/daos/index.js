import MongoCartDao from './carts/MongoCartDao.js'
import MongoProductDao from './products/MongoProductDao.js'
import FileCartDao from './carts/FileCartDao.js'
import FileProductDao from './products/FileProductDao.js'

let productsDao
let cartsDao

const databaseType = process.env.PERS

switch (databaseType) {
    case 'json':
        console.log('hitting the index as json')
        productsDao = new FileProductDao();
        cartsDao = new FileCartDao();
    case 'mongo':
        console.log('hitting index as mongo')
        productsDao = new MongoProductDao();
    default:
        break;
}

export { productsDao, cartsDao }