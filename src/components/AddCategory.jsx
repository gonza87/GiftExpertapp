import React from "react";
import { useState } from "react";

function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setCategories((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={handleInput}
      />
    </form>
  );
}

export default AddCategory;
