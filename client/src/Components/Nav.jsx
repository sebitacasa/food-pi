import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from "../Redux/Actions";
import Paginado from "./Pagina";
import styles from "./Nav.module.css";

export default function Nav() {
  const dispatch = useDispatch();

 
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
    <div >

        <Link to="/recipes/post">
          <button>Create Recipe</button>
        </Link>

        <button onClick={(e) => handleOnClick(e)}>Refresh Recipes</button>
      <div>

        <div  >
          <select onChange={(e) => hadleFilterTypeDiet(e)}>
            <option value="All">All recipes</option>
            <option value="gluten free">Gluten Free</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="lacto-vegetarian">Lacto-vegetarian</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="primal">Primal</option>
            <option value="whole 30">Whole 30</option>
            <option value="dairy free">Dairy Free</option>
          </select>
        </div>
      </div>
    </div>
  );
}
