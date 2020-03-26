
exports.up = knex => knex.schema.createTable('about', (t) => {
  t.increments('id');
  t.string('title').notNullable();
  t.string('description').notNullable();
  t.string('subtitle').notNullable();
  t.boolean('isActive').defaultTo(false);
  t.timestamp('created_at').defaultTo(knex.fn.now());
  t.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('about');
