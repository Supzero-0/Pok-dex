function PokemonCard() {

    const pokemonList = [
        {
            name: "bulbasaur",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
            name: "mew",
        },
    ];

    const pokemon = pokemonList[1];


    return <div>
        <figure>
            {pokemon.name === "bulbasaur" ? <img src={pokemon.imgSrc} /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    </div>;
}

export default PokemonCard;