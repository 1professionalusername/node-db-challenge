//model interfaces with the db. Without models, you have to write raw SQL. Router to model, model to db.

const db = require("../data/db-config")


// <--------Project-------->
function find() {
    return db("project")
}


async function add(project) {
    const [id] = await db("project")
        .insert(project)
    return db("project")
        .where({ id })
        .first()
}

// <--------Resource-------->
function find() {
    return db("resource")
}


async function add(resource) {
    const [id] = await db("resource")
        .insert(resource)
    return db("resource")
        .where({ id })
        .first()
}



module.exports = {
    find,
    add,

}
