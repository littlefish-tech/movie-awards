import React, { useState, useEffect } from "react";
import { movie } from "./Movies";
import RemoveBtn from "./RemoveBtn";

export default function NominateList(props: {
  count: number;
  removeMovie: any;
}) {
  const [saveMovies, setSaveMovie] = useState<[]>([]);
  useEffect(() => {
    console.log("nomlist");
    saveMov();
  }, [props.count]);
  function saveMov() {
    let m = localStorage.getItem("movie" || "[]");
    let movies = JSON.parse(m || "[]");
    setSaveMovie(movies);
  }

  return (
    <div>
      {saveMovies.length > 0 &&
        saveMovies.map((movie: movie, i: number) => (
          <div key={i}>
            <img src={movie.Poster} />
            <div>Title: {movie.Title}</div>
            <div>Year: {movie.Year}</div>
            <RemoveBtn removeMovie={() => props.removeMovie(movie.imdbID)} />
          </div>
        ))}
    </div>
  );
}
