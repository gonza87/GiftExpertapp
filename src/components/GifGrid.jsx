import React from "react";
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

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
      {images && (
        <div>
          <h3>{category}</h3>
          <ol>
            {images.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })}
          </ol>
        </div>
      )}
    </>
  );
}

export default GifGrid;
