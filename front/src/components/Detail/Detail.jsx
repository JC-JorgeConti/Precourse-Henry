import './Detail.css'; // Importa tu hoja de estilo CSS
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const ricky = "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdlsO0LP022AtLRcPlik-5uWGqVS90oIr1Wy70ULe7-qyaW-Y3a9zUgndw6Q6KuHX2gH_Vd3Nxnl6EOU38_ep9ApNbNfn2Krr6hLj6fhs_eZ.png?r=976"

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter ({});
  }, [id]);

  return (
    <div>
      {character ? (
    <div className='detail-container'>    
          
          <img className="detail-imagen" src={character.image} />
        <div className='detail-text'>  
          <h1>Detalle del personaje </h1>
          <h2>Nombre: {character.name}</h2>
          <h2>Status: {character.status}</h2>
          <h2>Genero: {character.gender}</h2>
          <h2>Specie: {character.species}</h2>
          <h2>Creado: {character.created}</h2> 
        </div>
        <img className="detail-imagen" src={ricky} /> 
      </div>
      ): (<h1>Loading data...</h1>)}
           
      </div>
  );
};

export default Detail; 