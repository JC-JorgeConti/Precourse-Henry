import style from "./Card.module.css";
import {Link} from 'react-router-dom';

// Aquí debes utilizar la información que llega por props al componente.
// Puede hacer destructuring de las propidades del objeto props si quieres

const Card = (props) => {
  const {id, name, status, species, gender, origin, image, onClose} = props

  
  return (
    <div className= {style.CardContairner}>
      <div className= {style.header}>
      <div className= {style.wrapperButton}>
      <button className= {style.btn} onClick={() => onClose(id)}>X</button>
         </div>
      <img src={image} alt='imagen' />
    </div>

      <div className= {style.wrapperText}>
        <div className= {style.name}>
          
          <Link to={`/detail/${id}`} style={{ textDecoration: "none", color: "white" }} >
               <h1>{name}</h1>
              
          </Link>
          
        </div>
          { /*<h2>{status}</h2>   */} 
          <h2>Specie: {species}</h2>
          <h2>Gender: {gender}</h2>
          {/*<h2>{origin}</h2> */}
     </div>      
    
    </div>

  );
};

export default Card;
