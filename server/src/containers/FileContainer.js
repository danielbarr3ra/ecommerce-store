import fs from 'fs/promises'
import config from '../config.js'
// make sure you use the promises instead of the fs will need to parse and unparse use helper functions for that


class FileContainer {
    /**
     * SCHEMA the database will sotre:
     * title, price, thumbnail, id for Producst
     * 
     * For cars we can do later on
     */
    constructor(path) {
        this.path = `${config.fileSystem.path}/${path}`
    }

    /**
     * 
     * TODO once I have ocnfidecne on the methods you can remove the try catch
     */


    async getAll() {
        try {
            const allItems = await fs.readFile(this.path)
            return JSON.parse(allItems)
        } catch (error) {
            console.log('there was en error fetching the items');
            console.log(error)
            return error;
        }
    }


    async get(id) {
        try {
            const allItems = await this.getAll()
            const item = allItems.filter((item) => {
                return item.id == parseInt(id);
            })
            if (!item) {
                throw error('There was no item that matched the id')
            }
            return item[0]
        } catch (error) {
            console.log('there was en error fetching the items');
            return error;
        }
    }
    async update(id, obj) {
        try {
            let allItems = await this.getAll();
            const index = allItems.findIndex((obj) => {
                return obj.id == parseInt(id)
            })
            const updated = { ...obj, id: id }
            allItems[index] = updated;

            await this.saveAll(allItems)
            return updated

        } catch (error) {
            console.log(error)
            console.log('there was an error updating the item')
            return error;
        }
    }
    async save(obj) {
        try {
            let allItems = await this.getAll();
            let lastId = allItems[allItems.length - 1].id ?? 0; //nullish coelece in case you have no objects in it
            allItems.push({ ...obj, id: ++lastId })
            await this.saveAll(allItems)
            return obj; // will return the saved obj
        } catch (error) {
            console.log('there was an error saving one of the objects')
            console.log(error)
            return error
        }
    }

    async saveAll(anArray) {
        try {
            console.log(`The array being save is ${JSON.stringify(anArray)}`)
            const stringed = JSON.stringify(anArray)
            await fs.writeFile(this.path, stringed)
        } catch (error) {
            console.log('there was an error saving all the objects')
            console.log(error)
            return error
        }
    }
    async delete(id) {
        try {
            let allItems = await this.getAll()
            const filtered = allItems.filter((obj) => {
                return obj.id != parseInt(id);
            })
            await this.saveAll(filtered);
        } catch (error) {
            console.log('there was an error deleting the item');
            return error;
        }
    }
    async deleteAll() {
        try {
            await this.saveAll([]);
        } catch (error) {
            console.log('there was an error deleting all the values')
            return error;
        }
    }
}

export default FileContainer