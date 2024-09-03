import React from "react";
import { getGifs } from "../helpers/getGifs";

function GifGrid({ category }) {
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
}

export default GifGrid;
