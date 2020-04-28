// Deletes ALL existing entries
exports.seed = knex => knex('categories').del()
// Inserts seed entries
  .then(() => knex('categories').insert([
    {
      title: 'Javascript', slug: 'javascript', isActive: true,
    },
    {
      title: 'MongoDB', slug: 'mongodb', isActive: true,
    },
  ]));


// knex seed:run --specific=01_posts.js
