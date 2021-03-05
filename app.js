const express = require('express');
const mongoose = require('mongoose');

const app = express();


// middleware
app.use(express.json())
app.use(express.static('public'));

const authRoute = require('./routes/authRoutes')


// view engine
app.set('view engine', 'ejs');



// database connection
const dbURI = 'mongodb://localhost/jwt';

const PORT = process.env.PORT || 3001

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(PORT, function(){
    console.log('App is listening at port', PORT)
  }))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoute)