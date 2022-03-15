import React from "react";
import styles from "./Card.module.css";


export default function Card({ title, image, diets, healthScore, id}) {
  console.log(id)

  return (
    <div className={styles.card}>
      <div  className={styles.cd}>
        <h3 className={styles.title}>{title}</h3>
        
        {/* <p>{analyzedInstructions[0].steps.map(d=><h5>{d.steps}</h5>)}</p>  */}
        <div className={styles.img}>
          <img
            className={styles.cardimg}
            src={image}
            alt="img not found"
            width="350px"
            height="400px"
          />
        </div>
        <div className={styles.tipes}>
          {diets?.map((d) => (
            <h3> {d.name}</h3>
          ))}
        </div>

        <h5>
          <b>Health Score:</b> {healthScore}
        </h5>

        {/* <div className={styles.tipes}>  {diets.map(t => <h5> {t.name}</h5>)}  </div>  */}
      </div>
    </div>
  );
}
