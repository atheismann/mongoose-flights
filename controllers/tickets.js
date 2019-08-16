const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
};

function create(req, res) {
    console.log(req);
    Ticket.create(req.body, function(err, ticket) {
        if (err) return res.render('<add ticket form>')
        console.log('ticket data', ticket);
        res.redirect(`/flights/${req.params.id}`);
    });
}

function newTicket(req, res) {
    Flight.find({}, function(err, flight) {
        res.render('tickets/new', {
            title: 'New Ticket',
            flight,
        });
    })
}