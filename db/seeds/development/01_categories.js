
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(() =>
      // Inserts seed entries
      knex('categories').insert([
        {
          id: 1, title: 'Javascript', slug: 'javascript', isActive: true,
        },
        {
          id: 2, title: 'MongoDB', slug: 'mongodb', isActive: true,
        },
      ]));
};
