import React from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

function GifGrid({ category }) {
  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
}

export default GifGrid;
