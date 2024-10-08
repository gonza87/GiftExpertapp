import React from "react";

function GifItem({ title, url }) {
  console.log(title);
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default GifItem;
