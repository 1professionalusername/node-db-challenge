
exports.seed = async (knex) => {
  await knex('resource').insert([

    {
      id: 1,
      name: 'Lawn Mower',
      description: "Self propelled, battery powered mower."
    },

    {
      id: 2,
      name: 'Push Broom',
      description: "Long handled, smooth bristle push broom"
    },

    {
      id: 3,
      name: 'Pliers',
      description: "Old pair of needle nose pliers"
    }
  ])
}