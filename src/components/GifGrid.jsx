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
      <div className="card-grid">
        {images.map((item) => {
          return <GifItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}

export default GifGrid;
