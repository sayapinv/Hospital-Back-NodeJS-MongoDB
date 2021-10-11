const { Router } = require('express');
const express = require('express');
const router = express.Router();

const{
    // getAllTasks,
    createNewAccount
    // changeTaskInfo,
    // deleteTask
} = require('../controllers/login.controllers');

// router.get('/allTasks', getAllTasks);
router.post('/createAccount', createNewAccount);
// router.patch('/updateTask', changeTaskInfo);
// router.delete('/deleteTask', deleteTask);

module.exports = router;