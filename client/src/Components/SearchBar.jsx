import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../Redux/Actions";
import styles from './Search.module.css' 

export default function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState('')

  function handleInputChange(e) {
    e.preventDefault(e);
    setTitle(e.target.value);
    setSearch("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(title));
  }

  return (
    <div className={styles.search}>
    <form onSubmit={(e) => {handleSubmit(e)}}> {/* este es para hacer enter y que funcione */}
    
    <input type='text' placeholder='search...' value={search} onChange={(e) => {handleInputChange(e)}} className={styles.input}></input>
    <button  type='submit' className={styles.btnsearch}>search</button>
    </form>

    </div>
  );
}
