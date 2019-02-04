
const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Member = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    city: String,
    state: String,
    locations: [{
        type: Schema.Types.ObjectId,
        ref: 'Location'
    }]
});

module.exports = mongoose.model("Member", Member);