const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const oneYear = 365 * 24 * 60 * 60 * 1000;
const oneYearLater = () => { return new Date(Date.now() + oneYear) };

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
    },
    arrival: Date,
})

const flightSchema = new Schema({
    airline: String,
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        enum: ['American (AAL)', 'Southwest (WN)', 'United (UAL)'],
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA',
    },
    departs: {
        type: Date,
        default: oneYearLater,
    },
    destinations: destinationSchema,
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema);