const db = require("../data/db-config")



function find() {
    return db("task")
}


async function add(task) {
    const [id] = await db("task")
        .insert(task)
    return db("task")
        .where({ id })
        .first()
}


module.exports = {
    find,
    add
}