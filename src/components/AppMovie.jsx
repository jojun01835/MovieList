import React from "react";
import { Link } from "react-router-dom";
import styles from "./AppMovie.module.scss";

const AppMovie = (props) => {
  return (
    <div key={props.id} className={styles.movie}>
      <Link to={`/About/${props.id}`}>
        <img className={styles.img} src={`https://image.tmdb.org/t/p/w500/${props.posterPath}`} alt={props.title} />
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.data}>{props.data}</div>
      </Link>
    </div>
  );
};

export default AppMovie;
