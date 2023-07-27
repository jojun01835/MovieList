import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slider.module.css";
import axios from "axios";
import styled from "styled-components";

const PreviousArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", background: "transparent", cursor: "pointer" }} onClick={onClick}>
      Previous
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", background: "transparent", cursor: "pointer" }} onClick={onClick}>
      Next
    </div>
  );
};

const CustomSlider = styled(Slider)`
  .slick-slide {
    width: 50%;
    height: 800px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 150px;
  }
  .slick-slide div {
    margin: 0 auto;
    width: 80%;
    height: 100%;
    text-align: center;
  }
  .slick-prev {
    font-size: 20px;
    left: 55px;
    z-index: 99;
  }
  .slick-next {
    font-size: 0px;
    right: 55px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 50px;
    line-height: 1;
    opacity: 0.75;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const SimpleSlider = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

  const [movies, setMovies] = useState([]);

  const getPoster = async () => {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR&region=KR");
      setMovies(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(movies);
    getPoster();
  }, []);

  const moveList = movies.map((movie) => (
    <div key={movie.id}>
      <h2 className={styles.text}>{movie.title}</h2>
      <span className={styles.text}>⭐{movie.vote_average}</span>
      <img className={styles.img} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
    </div>
  ));

  return (
    <div>
      <h2 className={styles.name}>이번달의 추천영화</h2>
      <CustomSlider {...settings} className={styles.boxWrap}>
        {moveList}
      </CustomSlider>
    </div>
  );
};

export default SimpleSlider;
