function PokemonCard({ pokemon }) {

    return <div>
        <figure>
            {pokemon.name === "bulbasaur" ? <img src={pokemon.imgSrc} /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    </div>;
}

export default PokemonCard;