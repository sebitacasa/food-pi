import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from "../Redux/Actions";
import Card from "./Card";
import Paginado from "./Pagina";
import SearchBar from "./SearchBar";
import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);


 

const [order, setOrder] = useState("");

  const [currentPage, setCurrentPage] = useState(1); // primero declaro un estado de la pagina en la posicion actual.
  const [recipesPerPage, setRecipesPerPage] = useState(9); // cantidad de recetas por pagina --- arranca en 9
  const indexLastRecipe = currentPage * recipesPerPage; // se setea el ultimo index de la pagina --- que es el resultado de la * entre la pagina actual y la cantidad de recetas por pagina
  const indexFirstRecipe = indexLastRecipe - recipesPerPage; // lo mismo solo que la resta del ultimo index con la cantidad de recetas por pag.
  const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe); // aca realiza el slice que va a dividir la pagina osea 1 ---0--- 9

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


   useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage, allRecipes]); // 



  function handlePuntuation(e) {
    e.preventDefault();
    dispatch(Actions.orderByScore(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleAlphabetic(e) {
    e.preventDefault();
    dispatch(Actions.orderByAlphabetic(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)
  }

  
  useEffect(() => {
    dispatch(Actions.getAllRecipes());
  }, [dispatch]);

  function handleOnClick(e) {
    e.preventDefault();
    dispatch(Actions.getAllRecipes()); // con el handler hacemos un refresh de todas las recetas
  }
  
  function hadleFilterTypeDiet(e) {
    dispatch(Actions.orderByTypeDiet(e.target.value)); // filtra por tipo de dieta
  }
 
  
  return (
    
    
    <div className={styles.bkg}>
    

     <SearchBar/>

    

     

      <div className={styles.filterC}>
        <Link to = '/recipes/post'> <button className={styles.create}>Create Recipe </button></Link>

        <button onClick = {e => handleOnClick(e)} className={styles.refresh}>Refresh Recipes</button>

       

                
                <div className={styles.filt}>
               
                
                </div>
                <div>

                <select  onChange={e => handlePuntuation(e)} className={styles.select}>
                    <option value="asc">Asc</option>
                    <option value="des">Des</option>
                </select>
                </div>

                <div>
                <select  onChange={e => handleAlphabetic(e)} className={styles.select}>
                    <option value="asc">A-Z</option>
                    <option value="des">Z-A</option>
                </select>
                </div>
                
                <div>
                <select onChange={e => hadleFilterTypeDiet(e)} className={styles.select}>
                    <option value="All">All recipes</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="vegetarian">Vegetarian </option>
                    <option value="lacto-vegetarian">Lacto-Vegetarian </option>
                    <option value="lacto ovo vegetarian">Ovo-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="whole 30">Whole 30</option>
                </select>
                </div>
     </div>  
     
      <div className={styles.paginado}> 
            <Paginado
            recipesPerPage = {recipesPerPage}
            allRecipes = {allRecipes.length}
            paginado= {paginado}
            />
            </div>     

        <div className={styles.cards}>
            { 
            currentRecipes.length > 0 ? currentRecipes.map( (e) => {
                return (
                    
                      <div key={e.id}>
                    <Link to={`/recipes/${e.id}`}>
                    <Card title={e.title} 
                    image={e.image} 
                    diets={e.diets} 
                    key={e.id}
                    healthScore={e.healthScore}/>
                    </Link>
                    </div>
                    )  
                }): <h5 className={styles.error}>404</h5>     
            }   
            </div>
                   
    </div>
)
}
                
                    
           
          
           
              
            
