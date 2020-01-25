import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [searchChar, setSearchChar] = useState([]);

  const handleChange = (event) => {
    let newChar = props.character.filter(character => {
      return character.name.includes(event.target.value);
    });
    setSearchChar(newChar);
  }


  return (
    <div>
      <form>
        <input
          id="name"
          onChange={handleChange}
          placeholder="Search"
        />
      </form>
      {searchChar.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
          character={character}
        />
      ))}
    </div>
  )
}
