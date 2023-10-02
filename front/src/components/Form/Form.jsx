import { useState} from 'react';
import validation from './validation';
import './form.css';

const Form = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",    

    });

const [errors, setErrors] = useState({})


const handleChange = (e) => {
    setErrors(validation( {...userData, [e.target.name]: e.target.value} ))
    setUserData({...userData, [e.target.name]: e.target.value})
   
};    

const handleSubmit =(e) => {
    e.preventDefault(); // Evita el envio del formulario por defecto
    // Realiza las validadicones aquí y muestra mensajes error según corresponda
    // Si no hay errores, redirige a la ruta "/home"
    if (Object.keys(errors).length === 0 ){
       // no haga nada si no hay errores
       window.location.href = '/home';
    }
};
    return (
    <div className="container">
     <form className="login" onSubmit={handleSubmit}>
        <div>
           <label className="label_login" htmlFor="">Email</label>
           <input 
                 name="email"
                 type="text" 
                 value={userData.email}
                 onChange={handleChange}
           />
          
         {  errors.e1 ? (
               <p>{errors.e1}</p>
             ) : errors.e2 ? (
             <p>{errors.e2}</p>
             ) : (<p>{errors.e3}</p>
          )} 
        </div>
 
        <div>

           <label className="label_login" htmlFor="">Password</label>
           <input 
                 name="password"
                 type="text" 
                 value={userData.password}
                 onChange={handleChange}
            />
        {
            errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>
        }

        </div>

        <button type="submit">Submit</button>
     </form>   

    </div>
  )
}
export default Form;