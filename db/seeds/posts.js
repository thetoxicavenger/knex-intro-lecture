exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('posts')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('posts').insert([
                {
                    title: 'Why I Love Improv',
                    subtitle: 'There\'s just so much to say...',
                    imgUrl: 'https://cdn-images-1.medium.com/max/1600/1*Umi_2NNvDavX3nRSs2N3jg.jpeg',
                    bodyMarkup: 'You tried. You failed.',
                    userId: 1,
                    groupId: 1
                },
            ])
        })
}