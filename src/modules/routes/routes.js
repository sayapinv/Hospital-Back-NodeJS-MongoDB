const { Router } = require('express');
const express = require('express');
const router = express.Router();

const{

    createNewAccount

} = require('../controllers/login.controllers');


router.post('/createAccount', createNewAccount);


module.exports = router;