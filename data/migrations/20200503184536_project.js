//Go back and write notes for this sprint as well as fix the models files(most were done in projects folder)
exports.up = async function (knex) {

    await knex.schema.createTable("project", (table) => {

        table.increments("id")

        table.text("name").notNull().unique()

        table.text("description")

        table.boolean("completed").notNull().defaultTo("false")
    })

    await knex.schema.createTable("task", (table) => {

        table.increments("id")

        table.string("description").notNull()

        table.string("notes")

        table.integer("project_id").notNull()

        table.boolean("completed").notNull().defaultTo(false)
    })

    await knex.schema.createTable("resource", (table) => {

        table.increments("id")

        table.string("name").notNull().unique()

        table.string("description")
    })

    await knex.schema.createTable("project_resource", (table) => {

        table.integer("project_id").notNull()
        // .onDelete("CASCADE") code that Jason taught us about. Rewatch end of lecture as refresher
        // .onUpdate("CASCADE")

        table.integer("resource_id").notNull()
        // .onDelete("CASCADE") code that Jason taught us about. Rewatch end of lecture as refresher
        // .onUpdate("CASCADE")

        table.primary(["project_id", "resource_id"])
    })



};

exports.down = async function (knex) {

    await knex.schema.dropTableIfExists("project_resource")

    await knex.schema.dropTableIfExists("resource")

    await knex.schema.dropTableIfExists("task")

    await knex.schema.dropTableIfExists("project")

};