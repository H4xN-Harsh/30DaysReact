const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const { authCaptain } = require('../middlewares/auth.middleware');


router.post('/register',[
    body('email').isEmail().withMessage("invalid email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name is must be atleast 3 character long"),
    
    body('password').isLength({min:6}).withMessage('password must be in 6 character long '),
    body('vehicle.color').isLength({min:3}).withMessage('color must be at least 3 character long'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be at least 3 character'),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid')],
    captainController.registerCaptain
)
router.post('/login',[
    body('email').isEmail().withMessage("invalid email"),
    body('password').isLength({min:6}).withMessage('invalid password')
],
    captainController.loginCaptain
)
router.get('/profile', authCaptain,captainController.getCaptainProfile);
module.exports = router;

router.get('/logout',authCaptain,captainController.logoutCaptain)