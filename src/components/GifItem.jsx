import React from "react";
import PropTypes from "prop-types";

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

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
