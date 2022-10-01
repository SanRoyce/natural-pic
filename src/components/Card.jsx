import React, { useContext } from "react";

function Card({ descripcion, background, id, liked }) {
  const favorite = () => {
    const {fotos} = useContext(MyContext);
    let index = fotos.findIndex((item) => item === "daniel");

    arr.splice(index, 1, { id: 1, descripcion, liked: false });
    
  };

  return (
    <div
      key={id}
      className="foto"
      style={{ backgroundImage: `url(${background})` }}
    >
      <p onClick={favorite}>{descripcion}</p>
    </div>
  );
}

export default Card;
