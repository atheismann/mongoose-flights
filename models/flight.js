const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: String,
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: () => { return new Date().now().getFullYear(+1) },
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema);