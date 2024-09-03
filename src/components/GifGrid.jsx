import React from "react";

const getGifs = async () => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=kYQMrvSee6kqr2cGrSGr6WXK7652mS08&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(data);
};

function GifGrid({ category }) {
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
}

export default GifGrid;
