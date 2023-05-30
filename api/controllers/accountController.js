
const asyncHandler = require('express-async-handler')
const Account = require('../models/accountModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//@description Get all posts
// @route GET /api/posts
//@access public
const getAccountInfo = asyncHandler(async (req, res) => {
    const account = await Account.find();
    res.status(200).json(account);
});

//@description Create a New post
// @route POST /api/account
//@access public
const createAccount = asyncHandler(async (req, res) => {
    console.log("req: ", req.body);
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ message: "All Fields are required" });
        //error handler need
        throw new Error("All Fields are required");
    }
    const accountAvailable = await Account.findOne({ email });
    if (accountAvailable) {
        res.status(400).json({ message: "Account already Existed" });
        throw new Error({ message: "Account already Existed" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const account = await Account.create({
        name,
        email,
        password: hashedPassword,
    })
    console.log(`user created ${account}`);
    if (account) {
        res.status(201).json({ _id: account.id, email: account.email });
    } else {
        res.status(400).json("User account data is not valid");
        throw new Error("User account data is not valid");
    }
    res.status(201).json(account);
});



//@description Login Account
// @route POST /api/account/login
//@access public
const loginAccount = asyncHandler(async (req, res) => {
    console.log("req: ", req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "All Fields are required" });
        //error handler need
        throw new Error("All Fields are required");
    }
    const account = await Account.findOne({ email });
    if (account && (await bcrypt.compare(password, account.password))) {
        const accessToken = jwt.sign({
            account: {
                email: account.email,
                id: account.id
            },
        },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );
        res.status(200).json({ accessToken })
    } else {
        res.status(401).json({ message: "email or password is not valid" })
    }
});


//@description Get current access token
// @route GET /api/account/current
//@access public
const currentAccount = asyncHandler(async (req, res) => {
    res.json(req.account);
});



module.exports = { getAccountInfo, createAccount, loginAccount, currentAccount };