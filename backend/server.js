const express = require('express');
const app = express();
require('dotenv').config();
const plantRouter = require('./routes/plant')
const userRouter = require('./routes/user')
const cors = require('cors')
const mongoose = require('mongoose');
//  DB_LINK = mongodb+srv://admin:admin1234@cluster0.dzykv.mongodb.net/mernGarden?retryWrites=true&w=majority
mongoose.connect(process.env.DB_LINK, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(()=> console.log('MongoDB is Successfully connected 🎉'))
.catch(()=> console.log('Database connection failed!'))
app.use(express.static(__dirname+ '/public'));
app.use(cors());

app.use(express.json());

const passport = require('passport');
require('./config/passport')(passport);


app.use(passport.initialize());
app.use(passport.session());


//! ============== LOCAL STRATEGY =============
app.post('/signin/passport/local', passport.authenticate('local'), (req, res) => {
  res.send(req.user);
  console.log(req.user);
})


//! ============= GITHUB STRATEGY=====================
// ask github to give some data
app.get('/signin/passport/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github'), (req, res) => {
  console.log('here is user', req.user);
  res.json(req.user);
})








app.get('/', (req, res) => {
  res.send(' <h1> Home Page </h1> ')
})


app.get('/failure', (req, res) => {
  res.send('login failed')
})



// routes as REST API for frontend
app.use('/plant', plantRouter);
app.use('/user', userRouter);
app.post('/user/data', (req, res)=> {
    // some data from frontend react UI
    console.log(req.body)
    // Save data to database
    // change or use data and send back message to fronend
    res.json({
        msg: 'successfully received!',
        username: req.body.username,
        age: 32,
        country: 'germany'
    })
})

app.listen(5000, ()=>{
    console.log('Backend is running on port 5000')
})


