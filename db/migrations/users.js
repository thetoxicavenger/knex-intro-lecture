exports.up = knex => {
    return knex.schema.createTable('users', function (table) {
        table.increments()
        table.string('firstName', 100)
        table.string('lastName', 100)
        table.string('handle', 100)
        table.boolean('displayRealName')
        table.string('bio', 1000)
        table.string('imgUrl', 500)
        table.boolean('admin')
        table.timestamps(true, true)
    })
}
exports.down = knex => {
    return knex.schema.dropTable('users')
}