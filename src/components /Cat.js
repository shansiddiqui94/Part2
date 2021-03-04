import React, { useState, useEffect } from "react";
import axios from "axios";

function Cat() {
  const [cat, setCat] = useState([]);

  const FetchCat = async () => {
    const response = await axios.get("https://api.thecatapi.com/v1/images");
    setCat(response.url);
  };
  useEffect(() => {
    FetchCat();
  }, []);

  return (
    <div className="cats">
      <img className="kitty" src={cat} alt="Meow" />
      <button onClick={FetchCat}> Press for Random Cats </button>
    </div>
  );
}

export default Cat;
