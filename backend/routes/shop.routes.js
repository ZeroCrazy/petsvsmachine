const { Router } = require('express');
const { check } = require('express-validator');
const { get, buyPet, buyHouse, buyFood, buyCaress, buyEgg } = require('../controllers/shop_controller');

// const { validator } = require('../middlewares/validator')
const { validateJWT } = require('../middlewares/validatorJWT')
const { petCE, houseCE, foodCE, caressCE } = require('../middlewares/shop')

const router = Router();



router.get('',
    validateJWT,
    get);


router.post('/buy/pet',
    validateJWT,
    petCE,
    buyPet);

router.post('/buy/house',
    validateJWT,
    houseCE,
    buyHouse);
    
router.post('/buy/food',
    validateJWT,
    foodCE,
    buyFood);

router.post('/buy/caress',
    validateJWT,
    caressCE,
    buyCaress);

router.post('/buy/egg',
    validateJWT,
    buyEgg);





module.exports = router;