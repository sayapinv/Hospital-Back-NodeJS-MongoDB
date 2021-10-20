const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { check } = require("express-validator")

const{ createNewAccount, loginAccount , tokenVerification } = require('../controllers/login.controllers');

// const { reseptionScheme } = require('../controllers/reseption.controllers');

const validation = [

    check('login')
        .isAlphanumeric(['en-US'])
        .withMessage('Поле логин должно состоять только из латинских букв и цифр')
        .notEmpty()
        .withMessage('Поле не может быть пустым')
        .isLength({ min:6, max:30 })
        .withMessage('Поле логина должно быть не менее 6 символов и не более 30'),
    check('password')
        .isAlphanumeric(['en-US'])
        .withMessage('Поле пароль должно состоять только из латинских букв и цифр')
        .notEmpty()
        .withMessage('Поле пароля не может быть пустым')
        .isLength({min:6,max:30})
        .withMessage('Поле пароля должно быть не меньше 6 символов и не более 30')
        .matches(/\d/)
        .withMessage("Пароль должен содержать минимум 1 цифру")

 ]


router.post('/createAccount', validation , createNewAccount);

router.post('/loginAccount', validation ,loginAccount)

router.post('/tokenverification', tokenVerification)

// router.post('/receivingAppointments', reseptionScheme)


module.exports = router;