const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
};

function create(req, res) {
    const ticket = new Ticket(req.body);
    ticket.flight = req.params.id;
    ticket.save(function(err) {
        if (err) return res.render('/tickets/new')
        res.redirect(`/flights/${req.params.id}`);
    });
}

function newTicket(req, res) {
    res.render('tickets/new', {
        title: 'New Ticket',
        flightId: req.params.id,
    });
}