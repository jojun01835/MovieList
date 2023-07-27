import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./About.module.scss";

const About = () => {
  const { id } = useParams();
  const [loading, setLoding] = useState(true);
  const [m, setAppm] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR`).then((res) => {
      console.log(res);
      setAppm(res.data);
      setLoding(false);
    });
  }, []);

  const moviedetail =
    loading === true ? (
      <div className={`${styles.loading}`}>Loding...</div>
    ) : (
      <div className={`${styles.user}`}>
        <div className={`${styles.box}`}>
          <img className={styles.img} src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt={m.title} />
          <h2 className={styles.title}>{m.title}</h2>
          <div className={styles.overview}>{m.overview}</div>
          <div className={styles.voteAverage}>{m.vote_average}</div>
        </div>
      </div>
    );

  return (
    <div>
      <h2 className={`${styles.h2}`}>detail</h2>
      {moviedetail}
    </div>
  );
};

export default About;
