import React, { useState, useEffect } from "react";
import axios from "axios";

function Dog() {
  const [dog, setDog] = useState([]);

  const FetchBreed = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    setDog(response.data);
  };
  useEffect(() => {
    FetchBreed();
  }, []);

  return (
    <div>
      <img className="doggie" src={dog.message} alt="" />
      <button onClick={FetchBreed}>Press for Random Dog </button>
    </div>
  );
}

export default Dog;
