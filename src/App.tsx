import React, { useEffect, useState } from "react";
import InputSearch from "./components/InputSearch";
import Movies, { movie } from "./components/Movies";
import ScrollToTop from "./components/ScrollToTop";
import Title from "./components/Title";
import "./App.css";

const OMDbAPI = process.env.REACT_APP_OMDb_API_KEY;

function App() {
  const [movies, setMovies] = useState<movie[]>([]);
  const [movieInput, setMovieInput] = useState<string>("");
  const [showName, setShowName] = useState<string>("");

  async function searchMovies() {
    if (movieInput.trim() === "") {
      return;
    }
    try {
      await fetch(`http://www.omdbapi.com/?apikey=${OMDbAPI}&s=${movieInput}`)
        .then((response) => response.json())
        .then((data) => {
          let movieArr = data.Search;
          setMovies(movieArr);
        });
      // setShowResults(true);
      setShowName(movieInput);
    } catch (error) {
      console.error("Error", error);
    }
  }

  return (
    <div className="App">
      <Title />
      <div>
        <InputSearch
          onChange={(e: any) => setMovieInput(e.target.value)}
          onClick={searchMovies}
        />
      </div>
      <div>
        <Movies
          movies={movies}
          movieInput={movieInput}
          // showResults={showResults}
          showName={showName}
        />
        {/* <NominateList /> */}
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
