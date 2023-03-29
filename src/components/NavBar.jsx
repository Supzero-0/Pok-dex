function NavBar({ setPokemonIndex, pokemonList }) {
    const changePokemon = (index) => {
        setPokemonIndex(index);
    }

    return <div>
        {pokemonList.map((pokemon, index) => (
            <button key={index}
                onClick={() => changePokemon(index)}>
                {pokemon.name}
            </button>
        ))}
    </div>;
}

export default NavBar;