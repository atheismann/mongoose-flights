const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const flightsRouter = require('./routes/flights');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/flights', flightsRouter);


app.listen(port, () => console.log(`Express is listening on part ${port}`));

