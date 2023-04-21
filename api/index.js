// importing the express 
const express = require('express');

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

// using the CORS to avoid the Errors.
app.use(cors());

//  when we get the request from API it is in the form of object so it throughs the error
//  So we need to conver that data into json  format by using below app.use(express.json()); function
app.use(express.json());

//  need to use the drivers link for  connection to the mongoose server.
//  and nned to pass the our db location like merndb  after the .mongodb.net/merndb?retryWrites .. like this
mongoose.connect('mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/merndb?retryWrites=true&w=majority');

//  need to use then and catch for handling the error and requests.
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

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    const passwordSuccess = bcrypt.compareSync(password, user.password)
    if (passwordSuccess) {
        // return res.json({ message: passwordSuccess });
        jwt.sign({ username, id: UserModel._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.json({ "token": token, message: "Logged in successfully" })
        })
    } else {
        return res.status(401).json({ error: "Invalid email or password", message: "Invalid email or password" });
    }
})



app.listen(4000, () => console.log('Server started on port 4000'));

// mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/test
// mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/?retryWrites=true&w=majority
//   mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/test
//   mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/test
// Pe9T3Rjq6XF7JQMV password for mongodb



