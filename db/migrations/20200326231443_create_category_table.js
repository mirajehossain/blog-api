
exports.up = function (knex, Promise) {
  return knex.schema.createTable('categories', (t) => {
    t.increments('id');
    t.string('title').notNullable();
    t.string('slug').notNullable().unique();
    t.boolean('isActive').defaultTo(false);
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('categories');
};
