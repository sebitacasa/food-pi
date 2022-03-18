import React from "react";
import styles from "./Card.module.css";


export default function Card({ title, image, diets, healthScore, id}) {

  
  let idRecipe = 3

  return (
    
      <div  className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
      
        {/* <p>{analyzedInstructions[0].steps.map(d=><h5>{d.steps}</h5>)}</p>  */}
        <div className={styles.imgaa}>
          <img
            className={` ${styles.image}`}
            src={image}
            max
            alt="image not found"
            width='200px'  height='250px'
            
            
          />
        </div>
        <div className={`${styles.colum} ${styles.movieText} ${styles.firstItem}`}>
          {diets?.map((d) => (
            <div key={idRecipe++}>
              
              <h3 className={styles.diet}> {d.name}</h3>
            </div>
            
            
            ))}
            <h5 className={styles.score}>HealthScore: {healthScore}</h5>
        </div>
        
      </div>
    
  );
}
        

        

