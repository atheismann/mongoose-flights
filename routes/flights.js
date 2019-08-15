const express = require('express');
const router = express.Router();


router.get('/', flightCtlr.index);

module.exports = router;