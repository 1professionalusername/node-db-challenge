exports.seed = async (knex) => {
  await knex('project').insert([
    {
      id: 1,
      name: 'Mow Lawn',
      description: "Mow the front and back lawn"
    },

    {
      id: 2,
      name: 'Sweep Garage',
      description: "Use push broom to sweep garage floor"
    },

    {
      id: 3,
      name: 'Unclog Drain',
      description: "Pull hair out of drain with pliers"
    },
  ])
}