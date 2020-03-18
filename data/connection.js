const knex = require("knex");

const knexfile = require("../knexfile.js");

const environment = "development";

const knexConfig = knexfile[environment];

// db represents a live connection to the database
module.exports = knex(knexConfig);
