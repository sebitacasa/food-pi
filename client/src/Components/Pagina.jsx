import React from "react";
import styles from './Pagina.module.css'


export default function Paginado ({recipesPerPage ,  allRecipes , paginado}) {
const pageNumbers = []
    for (let i = 0 ; i < Math.ceil(allRecipes/recipesPerPage) ; i++){ // con el mathCeil redondea la cantidad de recetas que quiero por pagina
   pageNumbers.push(i + 1) // para que muestre en el render directamente desde el 1
}
return (
          
    <nav  >
        <ul  >
            {
                pageNumbers?.map(n => (
                      <button key={n} className={styles.paginado} onClick= {() => paginado(n)}>{n}</button>
                    
                    
                ))
            }
        </ul>
    </nav>
            
)
}