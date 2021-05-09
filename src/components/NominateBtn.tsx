import React from "react";
import "../style/nominateBtn.css";

export default function NominateBtn(props: {
  onClick: any;
  isClicked: boolean;
}) {
  return (
    <button
      className="nominateBtn"
      onClick={props.onClick}
      disabled={props.isClicked}
    >
      Nominate
    </button>
  );
}
