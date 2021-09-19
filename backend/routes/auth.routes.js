const { Router } = require('express');
const { check } = require('express-validator');
const { login, register, identity } = require('../controllers/auth_controller');

const { validator } = require('../middlewares/validator')
const { validateJWT } = require('../middlewares/validatorJWT')

const router = Router();

router.post('/register',
    check('username', 'Username is must').not().isEmpty(),
    check('password', 'Password is must').not().isEmpty(),
    check('password', 'Password is must have 6 characters').isLength({ min: 6 }),
    check('email', 'Incorrect format email').isEmail(),
    validator,
    register);

router.post('/login',
    check('name', 'Name is must').not().isEmpty(),
    check('password', 'Password is must').not().isEmpty(),
    login);


router.get('/identity',
    validateJWT,
    identity);



module.exports = router;