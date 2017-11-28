
exports.up = function (knex) {
  return knex.schema.createTable('uses', function (table) {
    table.integer('user_id').unsigned()
    table.integer('chat_id').unsigned()
    table.string('lang', 40).nullable()
    table.text('code', 'longtext')
    table.binary('image')
    table.timestamp('created_at').defaultTo(knex.fn.now())

    table.primary(['user_id', 'chat_id'])
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('uses')
}
