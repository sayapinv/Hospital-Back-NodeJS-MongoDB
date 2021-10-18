const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { check } = require("express-validator")

const{ createNewAccount, loginAccount } = require('../controllers/login.controllers');


router.post('/createAccount',[

    check('login','Поле логин должно состоять только из латинских букв и цифр').isAlphanumeric(),
    check('login',"Поле не может быть пустым").notEmpty(),
    check('login',"Поле логина должно быть не менее 6 символов и не более 30").isLength({ min:6, max:30 }),
    check('password','Поле пароль должно состоять только из латинских букв и цифр').isAlphanumeric(),
    check('password' , 'Поле пароля не может быть пустым').notEmpty(),
    check('password', 'Поле пароля должно быть не меньше 6 символов и не более 30').isLength({min:6,max:30})

] , createNewAccount);

router.post('/loginAccount', loginAccount)


module.exports = router;