import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../style/inputSearch.css";

export default function InputSearch(props: { onChange: any; onClick: any }) {
  return (
    <div>
      <form>
        <div className="searchForm">
          <input
            type="text"
            name="inputMovie"
            className="movieName"
            onChange={props.onChange}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="searchIcon"
            onClick={props.onClick}
            aria-hidden="true"
          />
        </div>
      </form>
    </div>
  );
}
