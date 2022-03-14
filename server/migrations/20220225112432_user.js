/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("username").unique().notNullable();
      table.string("password_digest").notNullable();
      table.string("email").unique().notNullable();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.boolean("is_admin").defaultTo(false);
      table.string("avatar_url");
      table.timestamps(true, true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('users');
  
};
