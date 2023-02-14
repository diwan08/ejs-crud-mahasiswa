/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("mahasiswa", t => {
    t.increments("id");
    t.string("nama").notNullable();
    t.integer("nim", 10).notNullable();
    t.enum("prodi", ["IF", "TI", "SI", "RPL", "TE"]).notNullable();
    t.boolean("status").defaultTo(true);
    t.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("mahasiswa");
};
