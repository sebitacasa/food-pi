const  API_KEY  =  "b0d23f5958fe43cda196a32962b8ff44"

const axios = ('axios')


export const apiCall = () =>{

    return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`)
}