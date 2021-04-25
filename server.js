const express = require('express');
const morgan = require('morgan');
const port = 3000;
require('./config/database');

const indexRouter = require('./routes/index');
const shakesRouter = require('./routes/shakes');
const reviewsRouter = require('./routes/reviews');
const usersRouter = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/shakes', shakesRouter);
app.use('/', reviewsRouter);
app.use('/user', usersRouter);



app.listen(port, function() {
  console.log(`Express is listening on port:${port}`)
});