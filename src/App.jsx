import { useState } from 'react'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"


function App() {

  return (
    <div className="App">
      <MyTitle />
      <PokemonCard />
    </div>
  )
}

export default App
