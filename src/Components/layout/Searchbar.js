import React, {useState} from "react";
import { searchPokemon } from "../../Api";



const Searchbar = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value); 
  }

  const onClick = async (e) => {
    const data = await searchPokemon(search); //traje la función que hace el fetch acá.  
    setPokemon(data) ;
  }


  return (
  <div className="searchbar-container">
      <div className="searchbar">
         <input s
         placeholder="Buscar Pokémon..."         
         onChange= {onChange}
         />
       </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>  
      </div> 
      </div>
);
};


export default Searchbar;