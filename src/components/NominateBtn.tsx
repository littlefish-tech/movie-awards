import React from "react";
import "../style/clearBtn.css";

export default function NominateBtn(props: {
  onClick: any;
  isClicked: boolean;
}) {
  return (
    <button
      className="clearBtn"
      onClick={props.onClick}
      disabled={props.isClicked}
    >
      Nominate
    </button>
  );
}
