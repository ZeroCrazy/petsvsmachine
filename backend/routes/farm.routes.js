const { Router } = require('express');
const { ownerFarm } = require('../middlewares/owner');
const { validateJWT } = require('../middlewares/validatorJWT');

const { get, useHome, useFood, useCress } = require('../controllers/farm_controller');


const router = Router();

router.get('',
    validateJWT,
    get);

router.post('/house/:id',
    validateJWT,
    ownerFarm,
    useHome);

router.post('/food/:id',
    validateJWT,
    ownerFarm,
    useFood);

router.post('/cress/:id',
    validateJWT,
    ownerFarm,
    useCress);




module.exports = router;