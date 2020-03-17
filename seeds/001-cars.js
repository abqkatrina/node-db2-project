exports.seed = async function(knex) {
    const testData = [
      { VIN: "ER84JG99GJR7DLF93", make: "gmc", model: "jimmy", mileage: 100000},
      { VIN: "ER84JH69GJR7DLF93", make: "chevy", model: "tahoe", mileage: 200000},
      { VIN: "ER84JG99GJLLDLF93", make: "toyota", model: "prius", mileage: 80000},
    ];
  
    // truncate deletes ALL existing entries and reset the id back to 1
    await knex("cars").truncate();
  
    return knex("cars").insert(testData);
  };
  