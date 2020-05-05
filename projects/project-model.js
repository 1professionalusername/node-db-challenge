

const db = require("../data/db-config")


function find() {
    return db("project")
}

function add(project) {
    const [{ id }] = Projects("project")
        .insert(project)
    return db("project")
        .where({ id })
        .first()
}

module.exports = {
    find,
    add
}