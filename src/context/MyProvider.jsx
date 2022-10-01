import { useState, useEffect } from "react";
import MyContext from "./MyContext";
import axios from "axios";

const MyContextProvider = ({ children }) => {
  const baseURL = "/fotos.json";
  
  const [fotos, setFotos] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data.photos);
        setFotos(res.data.photos);
      })
      .catch((err) => console.log(err));
  }, []);
console.log(fotos)
  return (
    <MyContext.Provider value={{ fotos, setFotos }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;
