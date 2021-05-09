import React, { useEffect, useState } from "react";
import NominateBtn from "./NominateBtn";
import NominateList from "./NominateList";
import Modal from "./Modal";

import "../style/nominateList.css";
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
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(savedMovies));
    localStorage.setItem("id", JSON.stringify(strId));
    setCount(count + 1);
  }, [savedMovies]);

  async function nomineeMovie(id: string) {
    let m: movie[] = props.movies.filter(
      (movieObj: movie) => movieObj.imdbID === id
    );
    if (savedMovies.length === 5) {
      setShowModal(true);
    }
    if (strId.indexOf(id) === -1 && savedMovies.length < 5) {
      let saved = [...savedMovies, m[0]];
      setSavedMovies(saved);
      setStrId([...strId, id]);
    }
  }

  function removeMovie(id: string) {
    let newList = savedMovies.filter((item: movie) => item.imdbID !== id);
    strId.filter((itemId: string) => itemId !== id);
    setSavedMovies(newList);
    let newIdStr = strId.filter((itemId: string) => itemId !== id);
    setStrId(newIdStr);
  }

  return (
    <div className="contentDisplay">
      {showModal && <Modal onClick={() => setShowModal(false)} />}
      <div className="movieListContent">
        {props.movieInput && props.showName && (
          <div className="listText">Results for "{props.showName}"</div>
        )}
        <div className="movieList">
          {props.movies ? (
            props.movies.map((movie: movie, i) => (
              <div
                className="movie"
                key={i}
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${movie.Poster})`,
                }}
              >
                {/* <img src={movie.Poster} /> */}
                <div className="titleStyle">{movie.Title}</div>
                <div>Year: {movie.Year}</div>
                <NominateBtn
                  onClick={() => nomineeMovie(movie.imdbID)}
                  isClicked={strId.indexOf(movie.imdbID) !== -1}
                />
              </div>
            ))
          ) : (
            <div>No result display</div>
          )}
        </div>
      </div>
      <div className="nominateList">
        <NominateList count={count} removeMovie={removeMovie} />
      </div>
    </div>
  );
}
