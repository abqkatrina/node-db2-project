
exports.up = function(knex, Promise) {
  return knex.schema.createTable("sales", tbl => {
    tbl.increments();
    tbl
        .boolean("sold")
        .notNullable();
    tbl
        .timestamp("created_at", { precision: 6 })
        .defaultTo(knex.fn.now(6));
    tbl
        .references("cars.VIN")
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};