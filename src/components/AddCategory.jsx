import React from "react";
import { useState } from "react";

function AddCategory() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
