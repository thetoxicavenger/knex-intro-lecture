exports.up = knex => {
    return knex.schema.createTable('posts', function (table) {
        table.increments()
        table.string('imgUrl', 500)
        table.string('title', 200)
        table.string('subtitle', 200)
        table.string('bodyMarkup', 5000)
        table.integer('userId')
        table.integer('groupId')
        table.timestamps(true, true)
    })
}
exports.down = knex => {
    return knex.schema.dropTable('posts')
}