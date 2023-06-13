



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Stars from '../Images/stars-1837306.jpg';

const Characters = ({ categoryData }) => {
  const [charactersData, setCharactersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=${process.env.REACT_APP_API_KEY}`;
      const response = await axios.get(apiUrl);
      const data = response.data.data.results; // Extract the array from response data
      setCharactersData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter characters based on the search term
  const filteredCharacters = charactersData.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="card-container">
        <img id="characters-img" src={Stars} alt="" />
        {filteredCharacters.map((character) => (


          


<Link id='linkDone' key={character.id} to={`/characters/characterDetails/${character.id}`}>
  

<div key={character.id} className="card">
        <img id='img' src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.title} />
        <h3>{character.name}</h3>
        
        {/* Add more details as needed */}
      </div>
</Link>



        ))}
      </div>
    </div>
  );
};

export default Characters;


