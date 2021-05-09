import React from "react";
import "../style/modal.css";

export default function Modal(props: { onClick: () => void }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClick}>
          &times;
        </span>
        <p>You can Nominate max 5 movies</p>
      </div>
    </div>
  );
}
