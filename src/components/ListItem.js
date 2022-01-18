import React from "react";

const ListItem = ({ movie }) => {
  return (
    <li>
      <h4>{movie.title}</h4>
      <h5>{movie.release_date}</h5>
    </li>
  );
};

export default ListItem;
