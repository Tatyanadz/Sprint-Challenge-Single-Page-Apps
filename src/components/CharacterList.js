import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter]  = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacter(response.data.results)
      })
      .catch(error => {
        console.log("Error has occured", error)
      })
  }, []);

  return (
    <section className="character-list">
      <Div>
        <Link to="/"><Button>Home</Button></Link>
        <SearchForm character={character} />
        {character.map(char => (
          <CharacterCard
            key={char.id}
            name={char.name}
            species={char.species}
            status={char.status}
            image={char.image}
          />
        ))}
      </Div>
    </section>
  );
}

const Button = styled.button


const Div = styled.div
