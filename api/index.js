const express = require('express');

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
    const userDoc = await UserModel.create({ username, password });
    res.json(userDoc);
    // res.json({});
});

// Login API POST method
app.post('/login', async (req, res) => {
    const {email,password} = req.body;
    const userDoc = await UserModel.create({ email, password });
    res.json(userDoc);
});
// res.json({ requestData: { email, password } });

app.post('/signin', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
    // res.json({ requestData: { email, password } });
});



app.listen(4000, () => console.log('Server started on port 4000'));

// mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/test
// mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/?retryWrites=true&w=majority
//   mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/test
//   mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/test
// Pe9T3Rjq6XF7JQMV password for mongodb



// local pc => 6KAtPhxhLdOQZOlo