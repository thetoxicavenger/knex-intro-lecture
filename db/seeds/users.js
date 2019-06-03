exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {
                    firstName: 'Mitch',
                    lastName: 'Cravens',
                    handle: 'angelatwerkel',
                    displayRealName: false,
                    bio: "I am rad. Deal with it.",
                    imgUrl: 'https://avatars2.githubusercontent.com/u/11463589?s=400&v=4',
                    admin: true
                },
                {
                    firstName: 'Nick',
                    lastName: `D'Errico`,
                    handle: 'nickyfresh',
                    displayRealName: true,
                    bio: "Bic.",
                    imgUrl: 'https://avatars2.githubusercontent.com/u/11463589?s=400&v=4',
                    admin: false
                },
            ])
        })
}