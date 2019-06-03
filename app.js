const express = require('express')
const bodyParser = require('body-parser')
const knex = require('./db/knex')
const { check, validationResult } = require('express-validator/check');

const app = express()

app.use(bodyParser.json())

// simple select all
app.get('/api/users', (req, res) => {
    knex('users') // SELECT * FROM USERS 
    .then(users => {
        res.json(users)
    })
    .catch(e => {
        console.error(e)
        res.sendStatus(500)
    })
})

// select with where
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id
    knex('users')
    .where('users.id', '=', id)
    .then(user => { // will come back as an array
        if (!user.length) {
            res.sendStatus(404)
        } else {
            res.json(user)
        }
    })
    .catch(e => {
        console.error(e)
        res.sendStatus(500)
    })
})

const validateUser = [
    check('firstName').isString(),
    check('lastName').isString(),
    check('handle').isString(),
    check('displayRealName').isBoolean(),
    check('imgUrl').isString(),
    check('admin').isBoolean(),

]
app.post('/api/users', validateUser, (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
    knex('users')
    .insert(req.body)
    .returning('*')
    .then(user => { // will come back as an array
        res.json(user)
    })
    .catch(e => {
        console.error(e)
        res.sendStatus(500)
    })
})

app.patch('/api/users/:id', (req, res) => { // should validate this body too/404 if user does not exist
    knex('users')
    .where({
        id: req.params.id
    })
    .update(req.body)
    .returning('*')
    .then(user => { // will come back as an array
        res.json(user)
    })
    .catch(e => {
        console.error(e)
        res.sendStatus(500)
    })
})

app.delete('/api/users/:id', (req, res) => { 
    knex('users')
    .where('id', req.params.id)
    .del()
    .then(() => {
        res.send('User deleted.')
    })
    .catch(e => {
        console.error(e)
        res.sendStatus(500)
    })
})




app.listen(process.env.PORT || 3000)