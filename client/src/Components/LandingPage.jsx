import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"

export default function LandingPage(){
    return (
        <div className={styles.ldn}>
            <h1 className={styles.title} >Welcome to the kitchen</h1>
            
            <Link to = '/home'>
                <button className={styles.btn}>Enter</button>
            </Link>
        </div>
    )
}