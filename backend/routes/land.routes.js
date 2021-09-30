const { Router } = require('express');
const { check } = require('express-validator');
const { get, getPlayerLands, init } = require('../controllers/land_controller');

// const { validator } = require('../middlewares/validator')
const { validateJWT } = require('../middlewares/validatorJWT')

const router = Router();



router.get('',
    validateJWT,
    get);

router.get('/user',
    validateJWT,
    getPlayerLands);

// TODO: BORRAR
router.get('/create',
    init);





module.exports = router;