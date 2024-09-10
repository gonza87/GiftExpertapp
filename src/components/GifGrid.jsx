import React from "react";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

function GifGrid({ category }) {
  const { images, loading } = useFetchGifs(category);
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
