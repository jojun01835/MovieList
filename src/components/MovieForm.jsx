import { useState } from "react";
import React from "react";

const MovieForm = (props) => {
  const [movietitle, setMoiveTitle] = useState("");
  const [movieyear, setMoiveYear] = useState("");
  const [titleError, setTitleError] = useState("");
  const [yearError, setYearError] = useState("");
  const resetForm = () => {
    setMoiveTitle("");
    setMoiveYear("");
  };
  const validateForm = () => {
    resetErrors();
    let validated = true;
    if (!movietitle) {
      setTitleError("Error");
      validated = false;
    }
    if (!movieyear) {
      setYearError("Error");
      validated = false;
    }
    return validated;
  };
  const resetErrors = () => {
    setTitleError("");
    setYearError("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      props.addMovie({
        id: Date.now(),
        title: movietitle,
        year: movieyear,
      });
      resetErrors();
      resetForm();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="영화제목"
        value={movietitle}
        onChange={(e) => {
          setMoiveTitle(e.target.value);
        }}
      />
      <br />
      <div className="Err">{titleError}</div>
      <input
        type="text"
        placeholder="상영연도"
        value={movieyear}
        onChange={(e) => {
          setMoiveYear(e.target.value);
        }}
      />
      <br />
      <div className="Err">{yearError}</div>
      <button type="submit">영화 추가하기</button>
    </form>
  );
};

export default MovieForm;
