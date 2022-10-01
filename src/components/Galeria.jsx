import "../assets/css/galeria.css";
import MyContext from "../context/MyContext";
import { useContext } from "react";
import Card from "./Card";
export default function Home() {
  const { fotos } = useContext(MyContext);
 
  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((item) => (
        <Card
          descripcion={item.alt}
          background={item.src.original}
          key={item.id}
          id={item.id}
          liked={item.liked}
        />
      ))}
    </div>
  );
}
