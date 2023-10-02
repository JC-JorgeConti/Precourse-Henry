import "./App.css";
import Nav from "./components/Nav/Nav";
import { useState } from "react";

import Cards from "./components/Cards/Cards";
import axios from "axios";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import { Route, Routes, useLocation } from "react-router-dom";
import Detail from "./components/Detail/Detail";


function App() {
     
  const [characters, setCharacters] = useState([]); 

  const {pathname} =useLocation();
  console.log(pathname);
 
  
 function onSearch(id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    })
    .catch((error) => {
      window.alert('¡No hay personajes con este ID!', error);
    });
}

  const onClose = (id) => {
    setCharacters(
     characters.filter((char) => {
       return char.id !== Number(id);
     })
    );
  };

  return (
    <>
        {pathname !== "/" && <Nav onSearch = {onSearch} />}
        <Routes>
        <Route path={"/"} element={<Form />} /> 
        <Route path={"/home"} element={<Cards characters = {characters} onClose = {onClose} /> } />
        <Route path={"/About"} element={<About />}/>
        <Route path={"/Detail/:id"} element={<Detail />} />
        </Routes>
       

    {/*    <Nav onSearch = {onSearch} /> */}   
      {/* Al componente SearchBar le pasamos por la prop "onSearch" una función 
      <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}

      {/* Al componente Cards le pasamos por la prop "characters" el array de personajes que importamos más arriba 
      <Cards characters={characters} />  */}

      {/* Al componente Card le pasamos las props que corresponden a las propiedades de un personaje y una función "onClose" */}
   
    </>
  )
    }

export default App;
