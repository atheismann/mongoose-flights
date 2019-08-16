const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const oneYear = 365 * 24 * 60 * 60 * 1000;
const oneYearLater = () => { return new Date(Date.now() + oneYear) };

const flightSchema = new Schema({
    airline: String,
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: oneYearLater,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema);