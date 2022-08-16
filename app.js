const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config()

//connect db
mongoose.connect(process.env.DB_connect, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('database connect')
});

//middleware
app.use(bodyParser.json())

//import routes valid
const login = require('./validation/login')
const register = require('./validation/register')

//import routes 
const routes = require('./routes/routes')

//routes validation
app.use('/api/user', login )
app.use('/api/user', register )

//routes
app.use('/api/produk', routes)

//listen
app.listen(process.env.port, () => {
    console.log(`listening port ${process.env.port}`)
})