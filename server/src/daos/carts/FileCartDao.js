import FileContainer from "../../containers/FileContainer";

class FileCartDao extends FileContainer() {
    constructor() {
        super('products.json')
    }
}

export default FileCartDao