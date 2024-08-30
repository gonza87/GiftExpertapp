import { useState } from "react";
import AddCategory from "./components/AddCategory";

function GifExpertApp() {
  const [categories, setCategories] = useState(["one", "two"]);

  const onAddcategory = () => {
    setCategories([...categories, "test"]);
    console.log(categories);
  };

  return (
    <>
      <h1>Gif</h1>
      <AddCategory />
      <button onClick={onAddcategory}>Agregar categoria</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
}

export default GifExpertApp;
