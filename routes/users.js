const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller'); 

router.get('/profile',userController.profile); 

router.get('/sign-in',userController.Signin);
router.get('/sign-up',userController.Signup);

router.post('/create',userController.create);

module.exports = router;