const db = require("../data/db-config")



function find() {
    return db("resource")
}

function add(resource) {
    const [id] = db("resource")
        .insert(resource)
    return db("resource")
        .where({ id })
        .first()
}

module.exports = {
    find,
    add
}