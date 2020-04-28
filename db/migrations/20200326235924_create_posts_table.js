
exports.up = knex => knex.schema.createTable('posts', (t) => {
  t.increments('id').notNullable().primary().unique();
  t.string('title').notNullable();
  t.text('description').notNullable();
  t.string('category_slug').notNullable();
  t.string('slug').notNullable().unique();
  t.string('author').notNullable();
  t.integer('counter').notNullable().defaultTo(0);
  t.boolean('isActive').defaultTo(false);
  t.timestamp('created_at').defaultTo(knex.fn.now());
  t.timestamp('updated_at').defaultTo(knex.fn.now());
  t
    .foreign('category_slug')
    .references('slug')
    .inTable('categories');
});

exports.down = knex => knex.schema.dropTable('posts');
