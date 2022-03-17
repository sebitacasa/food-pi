
const { Router } = require('express')
const router = Router()
const { getById, getByName, getAllRecipos}  = require('../controllers/GetRecipes')
const { postFood } = require('../controllers/PostRecipes')




router.route('/getAll').get(getAllRecipos)
router.route('/:id').get(getById)
router.route('/').get(getByName)
router.route('/post').post(postFood)








module.exports = router

