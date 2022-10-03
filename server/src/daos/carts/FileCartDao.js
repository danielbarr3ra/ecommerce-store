import FileContainer from "../../containers/FileContainer.js";

class FileCartDao extends FileContainer {
    constructor() {
        super('products.json')
    }
}

export default FileCartDao