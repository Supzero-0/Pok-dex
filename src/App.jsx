import { useEffect, useState } from 'react'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"


function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0)
  const pokemon = pokemonList[pokemonIndex];
  if (pokemon.name === "pikachu") {
    window.alert("pika pikachu !!!")
  }

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  useEffect(
    () => {
      window.alert("hello pokemon trainer :)")
    },
    []
  )

  return (
    <div className="App">
      <MyTitle />
      <PokemonCard pokemon={pokemon} />
      <NavBar handleNext={handleNext} handlePrevious={handlePrevious} pokemonIndex={pokemonIndex} pokemonList={pokemonList} />
    </div>
  )
}

export default App
