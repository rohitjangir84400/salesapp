/* define user routes through which client can use backend */
const express = require('express');
const router = express.Router();
const {authenticateUser} = require('../middlewares/authmiddleware')
const {registerUser , login , logout , userdetails} = require('../controllers/usercontroller');

/* use middleware before sending response */
router.post('/register',registerUser);
router.post('/login',login);
router.post('/logout', logout);
router.get('/user/:id',authenticateUser,userdetails);


module.exports = router