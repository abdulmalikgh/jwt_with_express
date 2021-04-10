const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

const app = express();

// middleware
app.use(express.json())
app.use(express.static('public'));
app.use(cookieParser)

const authRoute = require('./routes/authRoutes')

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb://localhost/jwt';

const PORT = process.env.PORT || 3005

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
 .then( () => app.listen(PORT, function() {
  console.log(`App is running at ${PORT}`)
}) )
 .catch(err => console.log('Error', err))
// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoute)
// app.get('/set_cookie', ()=> {
//   res.send('ready to receive cookie')
// }
// )