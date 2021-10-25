const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { check } = require("express-validator")

const{ createNewAccount, loginAccount } = require('../controllers/login.controllers');

const { createReseption,getReceptions,deleteReception } = require('../controllers/reseption.controllers');

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

router.post('/createreception', createReseption)

router.get('/getreceptions' , getReceptions)

router.delete('/deleteReception' , deleteReception)


module.exports = router;
