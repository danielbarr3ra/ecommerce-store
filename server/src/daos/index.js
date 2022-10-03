/**
 * this will be what gets called with the env variables and select what kind of data contianer to use
 * Default will be the fle contianer
 */

let productsDao
let cartsDao

const databaseType = process.env.PERS

switch (databaseType) {
    case 'json':
        console.log('hitting the index as json')
        const { default: FileProductDao } = await import('./products/FileProductDao.js') // I do not like this kind of import
        const { default: FileCartDao } = await import('./carts/FileCartDao.js')

        productsDao = new FileProductDao();
        cartsDao = new FileCartDao();
    /**
     * Add the dao file archive for file
     */
    default:
        break;
}

export { productsDao, cartsDao }