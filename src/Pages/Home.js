import axios from "axios";
import React, { useEffect, useState } from "react";
import AppMovie from "../components/AppMovie";
import styles from "./Home.module.scss";
import SimpleSlider from "../components/Slider.jsx";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [appmovie, setAppMovie] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR&region=KR");
      setAppMovie(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <SimpleSlider />
      {isLoading ? (
        <div>
          <span className="load">"Loading"</span>
        </div>
      ) : (
        <div className={styles.appwrap}>
          {appmovie.map((amovie) => (
            <AppMovie id={amovie.id} title={amovie.title} posterPath={amovie.poster_path} data={amovie.release_date} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
