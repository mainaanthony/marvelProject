import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Background from '../Images/stars-1837306.jpg'

const  EventDetails = () => {


  console.log('shittty code')
  const { id } = useParams();
  const [event, setEvent] = useState(null);





  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiUrl = `https://gateway.marvel.com:443/v1/public/events/${id}?apikey=${process.env.REACT_APP_API_KEY}`;
      
      const response = await axios.get(apiUrl);
      const data = response.data.data.results[0];
      setEvent(data)
    } catch (error) {
      console.error(error);
    }
  };
  

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className='related'>

<img id='bgd' src={Background}  alt='Loading' />

<div className="card-details-1">
  

      <img src={`${event.thumbnail.path}.${event.thumbnail.extension}`} alt={event.name} />
      <h2>{event.name}</h2>
      <p>Description: {event.description}</p>
      <p>

Comics Available: <span>{event.comics.available}</span>

</p>

<p>

Series Available: <span>{event.series.available}</span>

</p>

<p>

Stories Available: <span>{event.stories.available}</span>

</p>

<p>

Characters Available: <span>{event.characters.available}</span>

</p>
RELATED COMICS
{event.comics.items.map((comic) =>

<h2>{comic.name}</h2>



)}

RELATED SERIES
{event.series.items.map((serie)=>
<h2>{serie.name}</h2>

)}

RELATED STORIES
{event.stories.items.map((story)=>
<h2>{story.name}</h2>

)}

RELATED CHARACTERS
{event.characters.items.map((story)=>
<h2>{story.name}</h2>

)}






      
      
      {/* Add more details as needed */}


    

    </div>


    </div>
    



  

  );
};

export default EventDetails;
