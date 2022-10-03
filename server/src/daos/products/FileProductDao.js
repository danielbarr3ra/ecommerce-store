import FileContainer from "../../containers/FileContainer.js"

class FileProductDao extends FileContainer {
    constructor() {
        super('products.json')
    }
}

export default FileProductDao