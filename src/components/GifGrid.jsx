import React from "react";
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

function GifGrid({ category }) {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map((item) => {
          return <GifItem />;
        })}
      </ol>
    </>
  );
}

export default GifGrid;
