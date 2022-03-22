import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../Redux/Actions";
import styles from './Search.module.css' 
import {FaSearch} from 'react-icons/fa'

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
    <div className={styles.search} >
      <div className={styles.searchBox}>
      <input className={styles.searchInput}
        type="text"
        placeholder="Search.."
        onChange={(e) => handleInputChange(e)}
      />

      <button  className={styles.btnsearch} type="submit" onClick={(e) => handleSubmit(e)} ><FaSearch size={20}/></button>
      </div>
     
    </div>
  );
}
