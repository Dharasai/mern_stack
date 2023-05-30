

const express = require('express');
const router = express.Router();
const { getAccountInfo, createAccount, loginAccount, currentAccount } = require('../controllers/accountController');
const validateToken = require('../middleware/validateTokenHandler');

router.route('/').get(getAccountInfo);

router.route('/register').post(createAccount);

router.route('/login').post(loginAccount);
// we can write with route key word or without it there is no change in functionality like below
// (1) router.route("/current").get(currentAccount);
// (2) router.get("/current", currentAccount);

// if we have single API for authorization you can write like below for the validation API with token.
router.get("/current", validateToken, currentAccount);


module.exports = router;
