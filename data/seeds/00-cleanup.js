
exports.seed = async (knex) => {
  await knex("project").truncate()
  await knex("task").truncate()

}