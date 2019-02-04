const Member = require('../models/Member')
const Location = require('../models/Location')
const mongoose = require('./connection')

const mars = new Location({
    city: 'lansing',
    state: 'mi',
    description: "Gas is too expensive. I'm gonna build a car that doesn't need gas"
})

const tesla = new Location({
    city: 'atlanta',
    state: 'ga',
    description: "Gotta visit the bluff its the best spot in atl"
})

const shomari = new Member({
    firstName: 'shomari',
    lastName: 'pope',
    userName: 'shomeripope',
    password: 'spaceiscool',
    city: 'detroit',
    state: 'mi',
    locations: [mars, tesla]
})

Member.deleteMany({})
    .then(() => Location.deleteMany({}))
    .then(() => Location.insertMany([mars, tesla]))
    .then(() => shomari.save())
    .then(() => console.log('Successful Save'))
    