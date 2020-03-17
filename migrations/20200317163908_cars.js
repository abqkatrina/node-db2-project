
exports.up = function(knex) {
    return knex.scheme.createTable("cars", tbl => {
        tbl
            .text("VIN", 17)
            .notNullable()
            .unique()
            .index();
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
