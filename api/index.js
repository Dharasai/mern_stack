const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/test')
//  register API POST method
app.post('/register', (req, res) =>{
    const {username, password} = req.body;
    res.json({requestData: {username, password}});
});

// Login API POST method
app.post('/login', (req, res) =>{
    const {email, password} = req.body;
    res.json({requestData: {email, password}});
});

app.listen(4000);
//   mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/test
//   mongodb+srv://dharasaikumar9849:Pe9T3Rjq6XF7JQMV@cluster0.1uyayv7.mongodb.net/test
// Pe9T3Rjq6XF7JQMV password for mongodb