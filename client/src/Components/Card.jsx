import React from "react";
import styles from "./Card.module.css";


export default function Card({ title, image, diets, healthScore, id}) {
  
  let idRecipe = 3

  return (
    <div  className={styles.card}>
      <div  className={styles.cd}>
        <h3 className={styles.title}>{title}</h3>
        
        {/* <p>{analyzedInstructions[0].steps.map(d=><h5>{d.steps}</h5>)}</p>  */}
        <div className={styles.img}>
          <img
            className={styles.cardimg}
            src={image}
            alt="image not found"
            
          />
        </div>
        <div className={styles.tipes}>
          {diets?.map((d) => (
            <div key={idRecipe++}>
              
              <h3 > {d.name}</h3>
            </div>
            
            ))}
        </div>
        
      </div>
    </div>
  );
}
        

        

