
exports.up = function (knex, Promise) {
  return knex.schema.createTable('locations', table => {
    table.increments()
    table.decimal('latitude').notNullable()
    table.decimal('longitude').notNullable()
    table.string('location_name').notNullable().defaultsTo('')
    table.integer('added_by_user').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations')
};
