const { Router } = require('express');
const { check } = require('express-validator');
const { get, buyHouse, buyFood, buyCaress } = require('../controllers/shop_controller');

// const { validator } = require('../middlewares/validator')
const { validateJWT } = require('../middlewares/validatorJWT')
const { houseCE, foodCE, caressCE } = require('../middlewares/shop')

const router = Router();



router.get('',
    validateJWT,
    get);


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





module.exports = router;