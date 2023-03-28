import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {

    return <div>
        <figure>
            {pokemon.name === "mew" ? <p>???</p> : <img src={pokemon.imgSrc} />}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    </div>;
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    })
}

export default PokemonCard;