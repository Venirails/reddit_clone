/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('posts', function (table) {
      table.increments('id');
      table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade');
      table.string('title', 255).notNullable();
      table.text('content', 500);
      table.timestamps();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('posts');
};
