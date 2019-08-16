const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Flight = require('./flight');

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/,
    },
    price: {
        type: Number,
        min: 0,
    },
    flight: {
        type: mongoose.Schema.ObjectId,
        ref: 'Flight',
    }
});

module.exports = mongoose.model('Ticket', ticketSchema)