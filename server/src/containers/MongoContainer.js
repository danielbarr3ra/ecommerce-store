import mongoose from 'mongoose'
import * as dotevn from 'dotenv'
import * as mongoObjectUtils from '../utils/mongoObjectUtils.js'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
dotevn.config();
await mongoose.connect(process.env.MONGOBD_CONNECTION_STRING, options)

class MongoContainer {
    constructor(collection, schema) {
        this.model = mongoose.model(collection, schema);
    }

    async getAll() {
        try {
            const data = await this.model.find({})
            const rawData = mongoObjectUtils.rawObject(data);
            if (rawData.length) {
                const items = rawData.map(
                    (item) =>
                        mongoObjectUtils.renameProperty(item, "_id", "id"))
                return items
            } else {
                return rawData;
            }
        } catch (error) {
            console.log('there was en error fetching the items');
            console.log(error)
            return error;
        }
    }


    async get(id) {
        try {
            const data = await this.model.findOne({ _id: id })
            const rawData = mongoObjectUtils.rawObject(data);
            if (rawData === null) {
                return rawData
            } else {
                const item = mongoObjectUtils.renameProperty(rawData, "_id", "id")
                return item
            }
        } catch (error) {
            console.log('there was en error fetching the items');
            return error;
        }
    }

    async getByProperty(property, criteria) {
        try {
            const data = await this.model.findOne().where(property).equals(criteria);
            const rawData = mongoObjectUtils.rawObject(data);
            if (rawData === null) {
                return rawData
            } else {
                const newItem = mongoObjectUtils.renameProperty(rawData, "_id", "id");
                return newItem;
            }
        } catch (error) {
            console.log(error)
            console.log('there was an error getting the item by property')
            return error;
        }
    }
    async update(id, obj) {
        try {
            await this.model.updateOne({ _id: id }, { $set: { ...obj } })
        } catch (error) {
            console.log(error)
            console.log('there was an error updating the item')
            return error;
        }
    }
    async save(obj) {
        try {
            const data = await this.model.create(obj);
            const rawData = mongoObjectUtils.rawObject(data);
            const newObj = mongoObjectUtils.renameProperty(rawData, "_id", "id");
            return newObj
        } catch (error) {
            console.log('there was an error saving one of the objects')
            console.log(error)
            return error
        }
    }

    async delete(id) {
        try {
            await this.model.deleteOne({ _id: id });
        } catch (error) {
            console.log('there was an error deleting the item');
            return error;
        }
    }
    async deleteAll() {
        try {
            await this.model.deleteMany({});
        } catch (error) {
            console.log('there was an error deleting all the values')
            return error;
        }
    }
}

export default MongoContainer