## Objectives
* Create a fully functional CRUD API using knex query builder

## Getting started
```
npm i --save knex pg
touch knexfile.js
mkdir db
mkdir db/seeds
mkdir db/migrations

// create db in postico
// update conn string in knexfile.js
// create migration files
// create seed files

knex migrate:latest && knex seed:run

```

## Resources
https://devhints.io/knex
https://express-validator.github.io/docs/