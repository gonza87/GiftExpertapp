import React from "react";

function GifItem({ image }) {
  console.log(image.title);
  return (
    <div>
      <p>{image.title}</p>
    </div>
  );
}

export default GifItem;
