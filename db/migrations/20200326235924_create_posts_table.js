
exports.up = knex => knex.schema.createTable('posts', (t) => {
  t.increments('id').primary();
  t.string('title').notNullable();
  t.text('description').notNullable();
  t.string('category_slug').notNullable();
  t.string('slug').notNullable();
  t.string('author').notNullable();
  t.integer('counter').notNullable();
  t.boolean('isActive').defaultTo(false);
  t.timestamp('created_at').defaultTo(knex.fn.now());
  t.timestamp('updated_at').defaultTo(knex.fn.now());
  t
    .foreign('category_slug')
    .references('slug')
    .inTable('categories');
});

exports.down = knex => knex.schema.dropTable('posts');
