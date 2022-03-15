const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const  getRecipes = require('./Recipe')
 const  getDiets = require('./Diets')



const router = Router();
router.use('/recipes', getRecipes)
router.use('/diets', getDiets)



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
