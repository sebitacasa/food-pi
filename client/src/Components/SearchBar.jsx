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
    <div className={styles.search} >
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => handleInputChange(e)}
      />

      <button  className={styles.btnsearch} type="submit" onClick={(e) => handleSubmit(e)}>Search...</button>
    </div>
  );
}
