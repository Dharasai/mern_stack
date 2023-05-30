// importing the express 
const express = require('express');


// npm i dotenv => is access to fetch the value of port from the environment variable file
// with the help of a process module which is core module of the nodejs.
const dotenv = require('dotenv').config();

const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 8000;

// backcryptjs is used for securing authentication of user from hackers 
// it will create a string kind and of unique data which conects to the user password.
// And along with this it needs "salt" which is the string.
const bcrypt = require('bcryptjs');

// salt => random string
const salt = bcrypt.genSaltSync(10);

// Install => jsonwebtoken for the authentication purpose
const jwt = require('jsonwebtoken');
const secret = "shjvdjbcjbjchbejmbj";



//  to avoid the error from CORS requests we need to install npm i cors 
const cors = require('cors');

//  for usage of mongo db  need to install npm i mongoose 
const mongoose = require('mongoose');

//  need to import the schema from the models folder.
const UserModel = require("./models/User");

//  for creating the API 's we need to convert the express function to variable as shown below.
const app = express();

// Error Handling using middleware
app.use(errorHandler);


// using the CORS to avoid the Errors.
app.use(cors({
    credentials: true,
    origin: 'http://localhost:8000',
}));

//  when we get the request from API it is in the form of object so it throughs the error
//  So we need to conver that data into json  format by using below app.use(express.json()); function
app.use(express.json());

// cookie-parser is used to the authentication to check the valid token or not.
const cookieParser = require('cookie-parser');
const connectDb = require('./config/dbConnection');

// cookie-parser =>  we can read the cookies whixh are inside of the API headers.
app.use(cookieParser());

//  need to use the drivers link for  connection to the mongoose server.
//  and nned to pass the our db location like merndb  after the .mongodb.net/merndb?retryWrites .. like this
// mongoose.connect('mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/merndb?retryWrites=true&w=majority');
connectDb();

//  need to use then or try and catch for handling the error and requests.
//  Only for GET API  => find() is used for get the data from the data base.

app.get("/user", (req, res) => {
    UserModel.find({})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
});

//  register API POST method
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await UserModel.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json({ user: userDoc, message: "registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error', message: "Failed to register user" });
    }
});

// Login API POST method

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password', message: 'Invalid username or password' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid username or password', message: 'Invalid username or password' });
        }
        const token = jwt.sign({ username, id: user._id }, secret);
        console.log("token: ", token);
        res.cookie('token', token, { httpOnly: true });
        res.json({ token, message: 'Logged in successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to login' });
    }
});


app.get('/profile', (req, res) => {
    res.json(req.cookies);
    console.log("req.cookies: ", req.cookies);
    debugger;
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
        res.status(200).json({ message: "OK" })
    })
})

//  POSTS 
// app.use() is the middleware for the API
app.use('/api/posts', require("./routes/postsRoutes"));
app.use('/api/account', require("./routes/accountRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));

// mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/test
// mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/?retryWrites=true&w=majority
//   mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/test
//   mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/test
// Pe9T3Rjq6XF7JQMV password for mongodb

