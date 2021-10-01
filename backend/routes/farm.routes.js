const { Router } = require('express');
const { ownerFarm, ownerPet } = require('../middlewares/owner');
const { validateJWT } = require('../middlewares/validatorJWT');

const { get, getDetails, putFarm, useHome, useFood, useCaress,deleteFarm } = require('../controllers/farm_controller');


const router = Router();

router.get('',
    validateJWT,
    get);

router.get('/:id',
    validateJWT,
    ownerFarm,
    getDetails);

router.post('/delete/:id',
    validateJWT,
    ownerFarm,
    deleteFarm);

router.post('/start',
    validateJWT,
    ownerPet,
    putFarm);

router.post('/house/:id',
    validateJWT,
    ownerFarm,
    useHome);

router.post('/food/:id',
    validateJWT,
    ownerFarm,
    useFood);

router.post('/caress/:id',
    validateJWT,
    ownerFarm,
    useCaress);




module.exports = router;