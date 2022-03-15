const axios = require('axios')
const  API_KEY  =  "b0d23f5958fe43cda196a32962b8ff44"
//const {API_KEY} = process.env;




const apiCall = async () => {
  let recipe = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`);
     
      let recipeInformation = recipe.data.results?.map((r) => {
        return {
          id: r.id,
          title: r.title,
          summary: r.summary,
          //dishTypes: r.dishTypes.map(d => {return {name:d}}),
          healthScore: r.healthScore,
          image: r.image,
          analyzedInstructions: r.analyzedInstructions ,
          diets: r.diets.map(d => {return {name:d}}),
        };
      });
      return recipeInformation
}


module.exports = {
  apiCall
}


// no funciona con bulkCreate.