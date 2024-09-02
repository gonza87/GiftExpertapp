import { useState } from "react";
import AddCategory from "./components/AddCategory";

function GifExpertApp() {
  const [categories, setCategories] = useState(["one", "two"]);

  const onAddcategory = (category) => {
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
