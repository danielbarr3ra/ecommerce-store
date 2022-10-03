import fs from 'fs/promises'
// make sure you use the promises instead of the fs will need to parse and unparse use helper functions for that


class FileContainer {
    /**
     * SCHEMA the database will sotre:
     * title, price, thumbnail, id for Producst
     * 
     * For cars we can do later on
     */
    constructor(path) {
        this.path = path;
    }

    /**
     * 
     * TODO once I have ocnfidecne on the methods you can remove the try catch
     */


    async getAll() {
        try {
            const allItems = await fs.readFile(this.path)
            return this.convertToJson(allItems)
        } catch (error) {
            console.log('there was en error fetching the items');
            return error;
        }
    }


    async get(id) {
        try {
            const allItems = await this.getAll()
            const item = allItems.filter((item) => {
                return item.id == id;
            })
            if (!item) {
                throw error('There was no item that matched the id')
            }
            return item
        } catch (error) {
            console.log('there was en error fetching the items');
            return error;
        }
    }
    async update(id, obj) {
        try {
            let allItems = await this.getAll();
            const index = allItems.findIndex((obj) => {
                return obj.id == id
            })
            const updated = { ...obj, id: id }
            if (!index) {
                throw error('there is no item that matched that id')
            }
            allItems[index] = updated;

            await this.saveAll(allItems)

        } catch (error) {
            console.log('there was an error updating the item')
            return error;
        }
    }
    async save(obj) {
        try {
            let allItems = await this.getAll();
            let lastId = allItems[allItems.length - 1].id;
            allItems.push({ ...obj, id: ++lastId })
            await this.saveAll(allItems)
        } catch (error) {
            console.log('there was an error saving one of the objects')
            return error
        }
    }

    async saveAll(anArray) {
        try {
            await fs.writeFile(anArray)
        } catch (error) {
            console.log('there was an error saving all the objects')
            return error
        }
    }
    async delete(id) {
        try {
            let allItems = await this.getAll()
            allItems.filter((obj) => {
                return obj.id != id;
            })
            await this.saveAll(allItems);
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


    // just for readibility (for me at least)
    convertToJson(aString) {
        return JSON.parse(aString)
    }
    convertToString(json) {
        return JSON.stringify(json)
    }

}

export default FileContainer