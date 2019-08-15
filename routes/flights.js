const express = require('express');
const router = express.router();

router.get('/', flightCtlr.index);

module.exports = router;