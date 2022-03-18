const {Diet} = require('../db')

let diets = [
  { name: "gluten free" },
  { name: "ketogenic" },
  { name: "vegetarian" },
  { name: "lacto-vegetarian" },
  { name: "lacto ovo vegetarian" },
  { name: "vegan" },
  { name: "pescatarian" },
  { name: "paleolithic" },
  { name: "primal" },
  { name: "whole 30" },
  { name: "dairy free"}
];

const getDiets = async (req,res) => {
    console.log(diets);
        diets.forEach(e => {
            Diet.findOrCreate({
                where: {name:e.name}
            })
        })

       
        const allTheTypes = await Diet.findAll();
        res.send(allTheTypes)



}

module.exports = 
	{getDiets}



