const { Router } = require('express');
const { check } = require('express-validator');
const { get } = require('../controllers/shop_controller');

// const { validator } = require('../middlewares/validator')
const { validateJWT } = require('../middlewares/validatorJWT')

const router = Router();



router.get('',
    validateJWT,
    get);





module.exports = router;