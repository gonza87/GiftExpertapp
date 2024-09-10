import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  const onAddcategory = (category) => {
    if (categories.includes(category)) return; //si la categoria existe no hace nada

    setCategories([...categories, category]);
    console.log(categories);
  };

  return (
    <>
      <h1>Gif</h1>
      <AddCategory onAddcategory={onAddcategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default GifExpertApp;
