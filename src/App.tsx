import React, { useEffect, useState } from "react";
import InputSearch from "./components/InputSearch";
import Movies, { movie } from "./components/Movies";
import ScrollToTop from "./components/ScrollToTop";
// import NominateList from "./components/NominateList";
import "./App.css";

const OMDbAPI = process.env.REACT_APP_OMDb_API_KEY;

function App() {
  const [movies, setMovies] = useState<movie[]>([]);
  const [movieInput, setMovieInput] = useState<string>("");
  const [showName, setShowName] = useState<string>("");

  console.log(movieInput);

  async function searchMovies() {
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
      <InputSearch
        onChange={(e: any) => setMovieInput(e.target.value)}
        onClick={searchMovies}
      />
      <section>
        <Movies
          movies={movies}
          movieInput={movieInput}
          // showResults={showResults}
          showName={showName}
        />
        {/* <NominateList /> */}
      </section>
      <ScrollToTop />
    </div>
  );
}

export default App;
