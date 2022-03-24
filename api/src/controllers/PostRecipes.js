const { Recipe, Diet } = require("../db");
const { v4: uuidv4 } = require("uuid");

const postFood = async (req, res) => {

  

    let {
      
      title,
      summary,
      healthScore,
      analyzedInstructions,
      diets,
      image,
      cuisines
     
    } = req.body;

    if(title && summary){
      let data_recipe = {
        title,
        summary,
        healthScore,
        analyzedInstructions,
        image,
        cuisines
        
      };
    
      try {
        let recipe_create = await Recipe.create({
          id: uuidv4(),
          ...data_recipe,
        });
    
        
          let id_diet = await Diet.findAll({ where: { name: diets } });
          await recipe_create.addDiet(id_diet);
          return res.json({msg: "Recipe Created"});
        
    
      } catch (err) {
        console.log(err);
       
    }
  
    

  } else{
    res.status(404).json({msg: "title and summary are required"})
  }
}
   
  

  module.exports = {
    postFood
  }