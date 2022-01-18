import React from "react";

const ListItem = ({ movie }) => {
  return (
    <li>
      <h4>{movie.title}</h4>
      <h5>{movie.releaseDate}</h5>
    </li>
  );
};

export default ListItem;
