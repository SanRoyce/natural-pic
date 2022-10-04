import React from 'react'
import MyContext from "../context/MyContext";
import { useContext } from "react";

function Favoritos() {
  const {fotos} = useContext(MyContext)
  const favorite = (id) => {
    console.log("click")
    let index = fotos.findIndex((item) => item.id === id);
    fotos[index].liked = false;
  }
  return (
    <div className="galeria grid-columns-5 p-3">

      {fotos.map((item) => item.liked === true &&(
        <div
          key={item.id}
          onClick={()=>favorite(item.id)}
          className="foto"
          style={{ backgroundImage: `url(${item.src.original})` }}
        >
          <p>{item.alt}</p>
          
        </div>
      ))}
    </div>
  );
}

export default Favoritos