import React from "react";
import { getById, cleanDetail} from "../Redux/Actions";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./RecipeDetail.module.css"

export default function Detail (){

    const  {id} = useParams()

     const dispatch = useDispatch()
    // useEffect(()=>{
    // dispatch( getById(id) ) }, [dispatch])    
            
        const recipeDetail = useSelector(state => state.details)
        console.log(recipeDetail)
        
    useEffect(()=>{
        dispatch(getById(id))
        return function () {
            dispatch(cleanDetail())
        }
        
    }, [dispatch])
        

    



    

        return (
            <div className={styles.detailsContainer}  >
             
           { 
             recipeDetail.length > 0 ? 
             
             <div  > 
                 <Link to='/home'><button className={styles.btn}>Back to main Page </button> </Link>
                 
                 <h1 className={styles.title}><strong> {recipeDetail[0].title} </strong></h1>
                
                     <img className= {styles.image} src={recipeDetail[0].image ? recipeDetail[0].image :'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'}/> 
                
                 
                  <div className={styles.div} >
                 <h3 className={styles.type}>Type Diet: {recipeDetail[0].diets.map(t => t.name + ', ')}</h3>
                 
                 <h5 className={styles.summary} ><strong>summary:</strong> {recipeDetail[0].summary}</h5>
                 <h5 className={styles.healthScore}  ><strong>healthScore:</strong> {recipeDetail[0].healthScore}</h5>
                 <h5  className={styles.summary}  ><strong>steps:</strong>{ Array.isArray(recipeDetail[0].analyzedInstructions) ? recipeDetail[0].analyzedInstructions.map(e => e.steps.map(f => f.step)) : recipeDetail[0].analyzedInstructions }</h5>
                 </div>
             </div> : 
             
             <div> <h2> loading... </h2> </div>
             
      
          }
          
              </div>
          )
    
   
    }    
    



    

    


