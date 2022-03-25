const axios = require('axios')
const  API_KEY  =  "1bbf9199dc5b4194a5afc7c567012870"
//const API_KEY = "b12e0b9f9aa74b498c35b1439cc9a7b4"
//const API_KEY = "a2eaf43ee80e490db7fb842240f056cf"
//const API_KEY = "d123d97dbd224bf58dbcf53b7af79752"




const apiCall = async () => {
  let recipe = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=70`);
     
      let recipeInformation = recipe.data.results?.map((r) => {
        return {
          id: r.id,
          title: r.title,
          summary: r.summary,
          healthScore: r.healthScore,
          image: r.image,
          analyzedInstructions: r.analyzedInstructions ,
          diets: r.diets.map(d => {return {name:d}}),
          dishTypes: r.dishTypes.map(d => {return d}),
          sourceName: r.sourceName,
          
        };
      });
      return recipeInformation
}









module.exports = {
  apiCall
}




// no funciona con bulkCreate.