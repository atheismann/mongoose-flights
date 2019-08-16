const createError = require('http-errors');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');
const destinationsRouter = require('./routes/destinations');
const ticketsRouter = require('./routes/tickets');


require('./config/mongoose');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/', destinationsRouter);
app.use('/', ticketsRouter);


app.listen(port, () => console.log(`Express is listening on part ${port}`));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;