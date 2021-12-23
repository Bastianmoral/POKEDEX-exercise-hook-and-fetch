import React from 'react';
import Pagination from '../layout/Pagination';
import Pokemon from "./Pokemon"

const Pokedex = (props) => {
  const {pokemons, page, setPage, total, loading } = props;

  const lastPage= () => {
    const nextPage = page - 1;
    setPage(nextPage)

  }

  const nextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage)
  }


  return (
    <div>
      <div className="header">
        <h1>Pokedex whith React, Hooks and Fetch</h1>
        <Pagination 
        page={page + 1}
        totalPages={total}
        onLeftClick={lastPage}
        onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div>Loading more Pokémon...</div>
      ) : (
        <div className="pokedex-grid">
            {pokemons.map((pokemon, i) => {
              return <Pokemon pokemon={pokemon} key={pokemon.name} />;
            })}
        </div>
      )}
    </div>
  );
};



export default Pokedex;