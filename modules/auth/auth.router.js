
const { validation } = require('../../midelware/validation');
const { signUpValidator, signInValidator } = require('./authvalidation');
const { login } = require('./controller/signin-controller');
const { signup } = require('./controller/signup-controller');

const router = require('express').Router();

router.post('/signup',validation(signUpValidator),signup)
router.post('/signin',validation(signInValidator),login)






module.exports = router;