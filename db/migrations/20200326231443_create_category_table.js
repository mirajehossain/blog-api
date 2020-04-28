
exports.up = knex => knex.schema.createTable('categories', (t) => {
  t.increments('id').unique();
  t.string('title').notNullable();
  t.string('slug').notNullable().unique();
  t.boolean('isActive').defaultTo(false);
  t.timestamp('created_at').defaultTo(knex.fn.now());
  t.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('categories');
