import { useState } from "react";
import AddCategory from "./components/AddCategory";

function GifExpertApp() {
  const [categories, setCategories] = useState(["one", "two"]);

  const onAddcategory = (category) => {
    if (categories.includes(category)) return; //si la categoria existe no hace nada

    setCategories([...categories, category]);
    console.log(categories);
  };

  return (
    <>
      <h1>Gif</h1>
      <AddCategory onAddcategory={onAddcategory} />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
}

export default GifExpertApp;
