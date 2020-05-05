const db = require("../data/db-config")




function find() {
    return db("project_resource")
}


async function add(project_resource) {
    const [id] = await db("project_resource")
        .insert(project_resource)
    return db("project_resource")
        .where({ id })
        .first()
}

module.exports = {
    find,
    add
}

