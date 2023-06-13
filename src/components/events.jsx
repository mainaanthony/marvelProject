import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from '../Images/stars-1837306.jpg'
import { Link } from 'react-router-dom';


const Events = () => {
  const [eventsData, setEventsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiUrl = `https://gateway.marvel.com:443/v1/public/events?limit=50&apikey=${process.env.REACT_APP_API_KEY}`;
      const response = await axios.get(apiUrl);
      const data = response.data.data.results; // Extract the array from response data
      setEventsData(data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter characters based on the search term
  const filteredCharacters = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
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

      {filteredCharacters.map((event) => (


<Link id='linkDone' key={event.id} to={`/comics/comicsDetails/${event.id}`}>
  

  <div key={event.id} className="card">
          <img   id='img'   src={`${event.thumbnail.path}.${event.thumbnail.extension}`} alt={event.title} />
          <h3>{event.title}</h3>
          
          {/* Add more details as needed */}
        </div>
  </Link>



      ))}
    </div>


</div>




    
  );
};

export default Events;
