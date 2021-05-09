import React, { useEffect, useState } from "react";
import NominateBtn from "./NominateBtn";
import NominateList from "./NominateList";

import "../style/movies.css";

export interface movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

export default function Movies(props: {
  movies: movie[];
  movieInput: string;
  showName: string;
}) {
  let nominatedMovies: movie[] = JSON.parse(
    localStorage.getItem("movie") || "[]"
  );
  let sId: string[] = JSON.parse(localStorage.getItem("id") || "[]");

  const [savedMovies, setSavedMovies] = useState<movie[]>(nominatedMovies);
  const [strId, setStrId] = useState<string[]>(sId);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("at here ~~~");
    localStorage.setItem("movie", JSON.stringify(savedMovies));
    localStorage.setItem("id", JSON.stringify(strId));
    setCount(count + 1);
  }, [savedMovies]);

  async function nomineeMovie(id: string) {
    let m: movie[] = props.movies.filter(
      (movieObj: movie) => movieObj.imdbID === id
    );

    if (strId.indexOf(id) === -1) {
      let saved = [...savedMovies, m[0]];
      setSavedMovies(saved);
      setStrId([...strId, id]);
    }
  }

  function removeMovie(id: string) {
    console.log("clicked");
    console.log(id);
    let newList = savedMovies.filter((item: movie) => item.imdbID !== id);
    strId.filter((itemId: string) => itemId !== id);
    setSavedMovies(newList);
    let newIdStr = strId.filter((itemId: string) => itemId !== id);
    setStrId(newIdStr);
  }

  return (
    <div className="contentDisplay">
      <div className="movieListContent">
        {props.movieInput && props.showName && (
          <div>Results for "{props.showName}"</div>
        )}
        <div className="movieList">
          {props.movies.map((movie: movie, i) => (
            <div className="movie" key={i}>
              <img src={movie.Poster} />
              <div key={i}>Title: {movie.Title}</div>
              <div>Year: {movie.Year}</div>
              <NominateBtn
                onClick={() => nomineeMovie(movie.imdbID)}
                isClicked={strId.indexOf(movie.imdbID) !== -1}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <NominateList count={count} removeMovie={removeMovie} />
      </div>
    </div>
  );
}
