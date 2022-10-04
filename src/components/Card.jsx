import React, { useContext } from "react";
import MyContext from "../context/MyContext";

function Card({ descripcion, background, id, liked }) {
  const { fotos } = useContext(MyContext);
  const favorite = () => {
    console.log("text");

    let index = fotos.findIndex((item) => item.id === id);
    fotos[index].liked = true;
  };

  return (
    <div
      key={id}
      onClick={favorite}
      className="foto"
      style={{ backgroundImage: `url(${background})` }}
    >
      <p>{descripcion}</p>
    </div>
  );
}

export default Card;
