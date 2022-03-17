const axios = require('axios')
const  API_KEY  =  "cf9c29166e834b0d980501527c03e978"
//const {API_KEY} = process.env;




const apiCall = async () => {
  let recipe = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=15`);
     
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

// const apiCall = () => {
//   axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`)
//   .then(repuesta => {
//     return repuesta.data
//   })
//   .catch(error=>{
//     console.log(error)
//   })
// }






module.exports = {
  apiCall
}




// no funciona con bulkCreate.