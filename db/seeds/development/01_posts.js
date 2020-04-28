// Deletes ALL existing entries
exports.seed = knex => knex('posts').del()
  // Inserts seed entries
  .then(() => knex('posts').insert([
    {
      title: 'fodark',
      description: 'Lorem ipsum description lodder summit the lazy dog',
      category_slug: 'javascript',
      slug: 'lorem-ipsum',
      counter: 0,
      isActive: true,
      author: 'Miraje',
    },
    {
      title: 'fodark 2',
      description: 'Lorem ipsum description lodder summit the lazy dog, Lorem ipsum description lodder summit the lazy dog, Lorem ipsum description lodder summit the lazy dog, Lorem ipsum description lodder summit the lazy dog',
      category_slug: 'javascript',
      slug: 'lorem-ipsum-2',
      counter: 2,
      author: 'Alamin',
      isActive: true,
    },
  ]));
