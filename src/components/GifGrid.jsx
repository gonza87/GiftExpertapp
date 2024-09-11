import React from "react";
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

function GifGrid({ category }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        <p>cargando</p>
      ) : (
        <>
          <div className="card-grid">
            {images.map((item) => {
              return <GifItem key={item.id} {...item} />;
            })}
          </div>
        </>
      )}
    </>
  );
}

export default GifGrid;
