import FileContainer from "../../containers/FileContainer.js";

class FileCartDao extends FileContainer {
    constructor() {
        super('carts.json')
    }
}

export default FileCartDao