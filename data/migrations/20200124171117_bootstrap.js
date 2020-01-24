
exports.up = function(knex) {
  return knex.schema
  .createTable("users", tbl => {
    tbl.increments("id");

    tbl
      .string("username", 255)
      .notNullable()
      .unique();
    tbl.string("password").notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users")
};
