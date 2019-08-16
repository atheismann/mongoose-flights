const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');
const flightCtrl = require('../controllers/flights');

router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);
router.get('/flights/:id/tickets', flightCtrl.show);

module.exports = router;