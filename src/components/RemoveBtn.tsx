import React from "react";
import "../style/movies.css";

export default function RemoveBtn(props: { removeMovie: () => void }) {
  return (
    <button className="rBtn" onClick={props.removeMovie}>
      Remove
    </button>
  );
}
