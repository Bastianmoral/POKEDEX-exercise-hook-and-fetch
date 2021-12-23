import React, {useState, useEffect} from 'react'
import "./index.css";
import Navbar from './Components/layout/Navbar';
import Searchbar from './Components/layout/Searchbar';
import Pokedex from './Components/pokemon/pokedex';
import { getPokemonData, getPokemons } from './Api';

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(5);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);


  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(12, 12 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count /12));
      setNotFound(false);
    } catch (err){}
  };

  useEffect(() =>{
    fetchPokemons();
  },[page] );

  return (
    <div>
      <Navbar />
      <div className="App">
          <Searchbar />
            <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
      </div>
    </div>
  );
};