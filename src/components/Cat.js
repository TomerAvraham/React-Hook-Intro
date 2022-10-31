import React, { useEffect } from "react";

const Cat = ({ number }) => {
  useEffect(() => {
    console.log("Cat got mounted");

    return () => {
      console.log("Cat got unmounted");
    };
  }, [number]);

  return (
    <div>
      <img
        alt="cat_image"
        src="https://1.bp.blogspot.com/-iCnFX7eWVjs/XR9NQutHXcI/AAAAAAAAJ9k/ISWH3UXgJF8QJdsV6P9wh3agzOwOF_aYgCLcBGAs/s1600/cat-1285634_1920.png"
      />
      <h1>{number}</h1>
    </div>
  );
};

export default Cat;
