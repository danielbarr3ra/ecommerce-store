import MongoContainer from "../../containers/MongoContainer.js";
import { cartSchema } from "../../../schemas/schemas.js";

class MongoCartDao extends MongoContainer {
    constructor() {
        super('carts', cartSchema)
    }
}

export default MongoCartDao