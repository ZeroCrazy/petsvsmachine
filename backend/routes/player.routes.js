const { Router } = require('express');
const { check } = require('express-validator');
const { getResources } = require('../controllers/player_controller');

// const { validator } = require('../middlewares/validator')
const { validateJWT } = require('../middlewares/validatorJWT')

const router = Router();



router.get('/resources',
    validateJWT,
    getResources);





module.exports = router;