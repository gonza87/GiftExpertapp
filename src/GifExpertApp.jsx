import { useState } from "react";

function GifExpertApp() {
  const [categories, setcategories] = useState(["one", "two"]);

  return (
    <>
      <h1>Gif</h1>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
}

export default GifExpertApp;
