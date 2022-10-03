import FileContainer from "../../containers/FileContainer";

class FileProductDao extends FileContainer() {
    constructor() {
        super('products.json')
    }
}

export default FileProductDao