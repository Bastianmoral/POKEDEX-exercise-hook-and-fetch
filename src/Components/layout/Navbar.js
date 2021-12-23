import React from 'react'

const Navbar  =  () => {
  let imgUrl = 
  "https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png";
  
  return ( 
  <nav>
    <div />
    <div>
    <img src= {imgUrl} alt="Pokemon-logo" className="navbar-image"/>
    </div>
    <div>❤</div>
    </nav>
    );
};


export default Navbar;