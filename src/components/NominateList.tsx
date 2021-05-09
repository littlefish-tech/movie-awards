import React, { useState, useEffect } from "react";
import { movie } from "./Movies";
import RemoveBtn from "./RemoveBtn";
import "../style/nominateList.css";
import "../style/movies.css";

export default function NominateList(props: {
  count: number;
  removeMovie: any;
}) {
  const [saveMovies, setSaveMovie] = useState<[]>([]);
  useEffect(() => {
    saveMov();
  }, [props.count]);
  function saveMov() {
    let m = localStorage.getItem("movie" || "[]");
    let movies = JSON.parse(m || "[]");
    setSaveMovie(movies);
  }

  return (
    <div className="mList">
      <div className="listText">Nomintations</div>
      <div>
        {saveMovies.length > 0 &&
          saveMovies.map((movie: movie, i: number) => (
            <div key={i} className="nominateMovie">
              <img src={movie.Poster} />
              <div className="nMovieContent">
                <div>Title: {movie.Title}</div>
                <div>Year: {movie.Year}</div>
                <RemoveBtn
                  removeMovie={() => props.removeMovie(movie.imdbID)}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
