const {Router} = require('express')

const router = Router()
const { getDiets } = require('../controllers/Diets')

router.route('/').get(getDiets)

module.exports = router