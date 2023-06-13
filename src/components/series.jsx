
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from '../Images/stars-1837306.jpg'
import { Link } from 'react-router-dom';


const Events = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiUrl = `https://gateway.marvel.com:443/v1/public/series?limit=50&apikey=${process.env.REACT_APP_API_KEY}`;
      const response = await axios.get(apiUrl);
      const data = response.data.data.results; // Extract the array from response data
      setSeriesData(data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter characters based on the search term
  const filteredCharacters = seriesData.filter((serie) =>
    serie.title.toLowerCase().includes(searchTerm.toLowerCase())
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

<img id='characters-img'  src={Stars} alt=''/>

      {filteredCharacters.map((serie) => (


<Link id='linkDone' key={serie.id} to={`/series/seriesDetails/${serie.id}`}>
  

  <div key={serie.id} className="card">
          <img id='img' src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} alt={serie.title} />
          <h3>{serie.title}</h3>
          
          
          {/* Add more details as needed */}
        </div>
  </Link>



      ))}
    </div>


</div>




    
  );
};

export default Events;
