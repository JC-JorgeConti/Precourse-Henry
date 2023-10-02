import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import './nav.css';

import {Link} from 'react-router-dom';


const Nav = (props) => {
   const {onSearch}  = props;


return (
   <div>
      <Link to='/home' className='button-link'>HOME</Link>
      <Link to='/about' className='button-link'>ABOUT</Link>
          
      <SearchBar onSearch= {onSearch} />
         
    </div>
       );

};

export default Nav;
