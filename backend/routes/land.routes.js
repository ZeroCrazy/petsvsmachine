const { Router } = require('express');
const { check } = require('express-validator');
const { get, getPlayerLands, floorLandActive, init } = require('../controllers/land_controller');

// const { validator } = require('../middlewares/validator')
const { validateJWT } = require('../middlewares/validatorJWT')

const router = Router();



router.get('',
    validateJWT,
    get);

router.get('/user',
    validateJWT,
    getPlayerLands);

router.get('/floor',
    validateJWT,
    floorLandActive);


//! TODO: BORRAR
router.get('/create',
    init);





module.exports = router;