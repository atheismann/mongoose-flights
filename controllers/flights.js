const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
const oneYear = 365 * 24 * 60 * 60 * 1000;
const oneYearLater = () => { return new Date(Date.now() + oneYear) };

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({ flight: flight._id }, function(err, tickets) {
            res.render('flights/show', { title: 'Flight Detail', flight, tickets });
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight', oneYearLater });
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}