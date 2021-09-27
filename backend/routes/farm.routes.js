const { Router } = require('express');
const { check } = require('express-validator');
const { get } = require('../controllers/farm_controller');

// const { validator } = require('../middlewares/validator')
const { validateJWT } = require('../middlewares/validatorJWT')

const router = Router();

router.get('',
    validateJWT,
    get);




module.exports = router;