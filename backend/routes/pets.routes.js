const { Router } = require('express');
const { check } = require('express-validator');
const { create, getByPlayer, getDetails } = require('../controllers/pet_controller');

// const { validator } = require('../middlewares/validator')
const { validateJWT } = require('../middlewares/validatorJWT')

const router = Router();


router.post('/create',
    validateJWT,
    create);

router.get('',
    validateJWT,
    getByPlayer);

    
router.get('/:id',
    validateJWT,
    getDetails);





module.exports = router;