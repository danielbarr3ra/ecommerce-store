import MongoContainer from "../../containers/MongoContainer.js";
import { cartSchema } from "../../../schemas/schemas.js";

class MongoCartDao extends MongoContainer {
    constructor() {
        super('products', cartSchema)
    }
}

export default MongoCartDao