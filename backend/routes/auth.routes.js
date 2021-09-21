const { Router } = require('express');
const { check } = require('express-validator');
const { login, register, metamaskLogin } = require('../controllers/auth_controller');

const { validator } = require('../middlewares/validator')
const { validateJWT } = require('../middlewares/validatorJWT')

const router = Router();

router.post('/register',
    check('password', 'Password is must').not().isEmpty(),
    check('password', 'Password is must have 6 characters').isLength({ min: 6 }),
    check('email', 'Incorrect format email').isEmail(),
    check('username', 'Username is must').not().isEmpty(),

    validator,
    register);

router.post('/login',
    check('email', 'Email is must').not().isEmpty(),
    check('email', 'Incorrect format email').isEmail(),
    check('password', 'Password is must').not().isEmpty(),
    validator,
    login);

router.post('/login/metamask',
    check('metaMaskAddress', 'Metamask is must').not().isEmpty(),
    validator,
    metamaskLogin);





module.exports = router;