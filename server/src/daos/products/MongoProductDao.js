import MongoContainer from "../../containers/MongoContainer.js";
import { productSchema } from "../../../schemas/schemas.js";

class MongoProductDao extends MongoContainer {
    constructor() {
        super('products', productSchema)
    }
}

export default MongoProductDao