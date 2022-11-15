export const rawObject = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

export const renameProperty = (record, from, to) => {
    record[to] = record[from]
    delete record[from]
    return record
}

export const removeProperty = (record, property) => {
    const value = record[property]
    delete record[property]
    return value
}