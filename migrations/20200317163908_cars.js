
exports.up = function(knex, Promise) {
    return knex.schema.createTable("cars", tbl => {
      
      tbl.increments();

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
