import React from "react";

export default function RemoveBtn(props: { removeMovie: () => void }) {
  return <button onClick={props.removeMovie}>Remove</button>;
}
