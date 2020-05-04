
exports.seed = async (knex) => {
  await knex('task').insert([

    {
      id: 1,
      description: 'Mow the front and back laws ',
      notes: "Clear out the grass from the mower blades when finished",
      completed: false,
      project_id: 1
    },

    {
      id: 2,
      description: 'Sweep the garage floor including the corners',
      notes: "Move and sweep under small objects and sweep around large ones",
      completed: false,
      project_id: 2
    },

    {
      id: 3,
      description: 'Unclog bathroom sink drain',
      notes: "Disassemble the pvc pipe and make sure you have something to catch the water in the p-trap",
      completed: false,
      project_id: 3
    }
  ])
}