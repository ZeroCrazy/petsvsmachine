const { Router } = require('express');
const { check } = require('express-validator');
const { create, getByPlayer, openEgg } = require('../controllers/egg_controller');

// const { validator } = require('../middlewares/validator')
const { validateJWT } = require('../middlewares/validatorJWT')

const router = Router();


router.post('/create',
    validateJWT,
    create);

router.get('',
    validateJWT,
    getByPlayer);

    
router.post('/open/:id',
    validateJWT,
    openEgg);





module.exports = router;