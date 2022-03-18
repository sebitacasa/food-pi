const { apiCall } = require("../request/Recipe");
const { Recipe, Diet } = require("../db");
const { Sequelize } = require("sequelize");



const getAllRecipos = async (req, res) => {
  try {
    let recipesApi =  await apiCall();
    let recipeDb = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    // let final = Promise.all(recipeDb.concat(recipesApi))
    // res.send(final)

     return res.send(await Promise.all([ ...recipeDb, ...recipesApi  ]));

    
  } catch (error) {
    console.log(error);
  }
};

const getByName = async (req, res) => {
  let { title } = req.query;
  
  let lowerNames = title.toLowerCase();

  try {
    let allRecipes = await apiCall();
    let filterRecipeApi = await allRecipes.filter((r) => {
      if (r.title.toLowerCase().includes(lowerNames)) {
        return r;
      }
    });

    const recipeBD = await Recipe.findAll({
      where: {
        title:{[Sequelize.Op.iLike]:`%${lowerNames}%`}
      },
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });


    //return res.json({ data: await Promise.all(recipeBD.concat(filterRecipeApi)) });
    return res.send(await Promise.all([ ...recipeBD, ...filterRecipeApi ]));
  } catch (error) {
    console.log(error);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  const allRecipes = await apiCall();

  const dbinfo = id.includes('-')
  if(dbinfo){
      try {
          let dbId = await Recipe.findByPk(id, {include: Diet})
          res.json([dbId]) // si no hago esto, me lo pasa como objeto, y no me deja renderizar en el front, ya que el render lo hago desde un arreglo
      } catch (error) {
          console.log(error)
      }
  } else{
  try {
    {
      let recipeId = allRecipes.filter((a) => a.id === parseInt(id));
      if (recipeId.length) {
        res.json(recipeId);
      } else {
        return res.status(400).json("Id not found");
      }
    }
  } catch (error) {
    console.log(error);
  }
} 
}




module.exports = {
  getById,
  getAllRecipos,
  getByName,
  
};
