import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from "../Redux/Actions";
import Card from "./Card";
import Paginado from "./Pagina";
import Nav from "./Nav";
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
  const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe); // aca realiza el slice que va a dividir la pagina osea 1 ---0--- 6

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(Actions.getAllRecipes());
  }, [dispatch]);

  function handlePuntuation(e) {
    e.preventDefault();
    dispatch(Actions.orderByScore(e.target.value));
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`);
  }

  return (
    <div className={styles.filterC}>
        
      <div className={styles.nav}>
      
        

        <Link to={"/"}>
          <button>Back to Landing Page</button>
        </Link>
      
        <Nav />

        <SearchBar/>

      <div>
        <select onChange={(e) => handlePuntuation(e)}>
          <option value="asc">ascendent</option>
          <option value="des">descendent</option>
        </select>
      </div>

          </div>
      <div className={styles.paginado}>
        <Paginado // son las props que se necesitasn para renderizar el paginado
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginado={paginado}
          />{" "}
      </div>


     

      <div  className={styles.cards}>
        {currentRecipes?.map((e) => {
          return (
              <div key={e.id}>
                <Link to = {`/recipes/${e.id }`}>
              <div  >
                <Card id={e.id} 
                title={e.title} 
                image={e.image} 
                diets={e.diets} />
              </div>
              </Link>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
                
           
              
            
