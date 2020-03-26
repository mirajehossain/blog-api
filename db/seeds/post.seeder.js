exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex('posts').del()
    .then(() =>
      // Inserts seed entries
      knex('posts').insert([
        {
          title: 'fodark',
          description: 'Lorem ipsum description lodder summit the lazy dog',
          category_slug: 'nodejs',
          slug: 'lorem-ipsum',
          author: 'miraje',
          counter: 0,
          isActive: true,
        },
        {
          title: 'fodark 2',
          description: 'Lorem ipsum description lodder summit the lazy dog, Lorem ipsum description lodder summit the lazy dog, Lorem ipsum description lodder summit the lazy dog, Lorem ipsum description lodder summit the lazy dog',
          category_slug: 'angular',
          slug: 'lorem-ipsum-2',
          author: 'alamin',
          counter: 0,
          isActive: true,
        },
      ]));
