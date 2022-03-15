import React from "react";
import { useEffect} from "react";
import Card from "./Card";
import {useSelector, useDispatch} from 'react-redux'
import styles from './Cards.module.css'
import { getAllRecipes } from "../Redux/Actions";




export default function Cards(){

    const dispatch = useDispatch()
    const recip = useSelector(state => state.recipes) // se trae el estado que queremos desde el reducer. 
    // gracias a redux si modificamos el estado en el reducer, tambien lo va a modificar aca automaticamente.

    useEffect(()=>{
        dispatch(getAllRecipes())// el use effect remplaza los otros ciclos de vida, esto va a permitir traer 
        // la informacion desde el backend antes de renderizar. importa la funcion que hace el request desde el action.
    }, [dispatch]) //  se pasa el dispath como DEPENDENCIA, para que cada vez que realize un cambio corra la funcion y actualize los cambios generados.


    return (
        <div className={styles.cards}>
          {recip?.map((c) => (
            <div key={c.id}>
              <Card
                id={c.id}
                title={c.title}
                healthScore={c.healthScore}
                diets={c.diets}
              />
            </div>
      ))}
        </div>
      );
}