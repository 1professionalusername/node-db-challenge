
exports.up = async function (knex) {
    await knex.schema.createTable("project", (table) => {
        table.increments("id")
        table.string("name").notNull()
        table.string("description")
        table.boolean("completed")
    })

    await knex.schema.createTable("task", (table) => {
        table.increments("id")
        table.string("description").notNull()
        table.string("notes")
        table.boolean("completed").defaultTo(false)
        table.integer("project_id")
            .notNull()
            .references("id")
            .inTable("project")
    })

    await knex.schema.createTable("resource", (table) => {
        table.increments("id")
        table.string("name").notNull()
        table.string("description")
    })

    await knex.schema.createTable("project_resource", (table) => {
        table.integer("project_id")
            .notNull()
            .references("id")
            .inTable("project")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        table.integer("resource_id")
            .notNull()
            .references("id")
            .inTable("project")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        table.primary(["project_id", "resource_id"])
    })



};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("project_resource")
    await knex.schema.dropTableIfExists("resource")
    await knex.schema.dropTableIfExists("task")
    await knex.schema.dropTableIfExists("project")

};