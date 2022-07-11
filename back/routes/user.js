// Les différentes routes pour les actions concernant l'inscription et la connexion des utilisateur sur le site

const express = require('express')
const router = express.Router() 
const userCtrl = require('../controllers/user') 
const emailSignupMiddleware = require('../middleware/email-signup')
const passwordSignupMiddleware = require('../middleware/password-signup')

router.post('/signup',emailSignupMiddleware,passwordSignupMiddleware, userCtrl.signup)
router.post('/login', userCtrl.login)


module.exports = router