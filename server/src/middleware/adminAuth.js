const isAdmin = true

const credentialError = (path, method) => {
    const errorObj = {
        error: -1,
    }
    if (path && method) {
        errorObj.description = `the path ${path} method ${method} is not authorized`
    } else {
        errorObj.description = 'not authorized'
    }
    return errorObj
}

const onlyAdmin = (req, res, next) => {
    // should be used whene deleteting items or updatingin them 
    if (!isAdmin) {
        res.json(credentialError)
    } else {
        next()
    }
}

export default onlyAdmin