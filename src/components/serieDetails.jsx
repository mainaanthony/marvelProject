import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Background from '../Images/stars-1837306.jpg'

const  EventDetails = () => {


  console.log('shittty code')
  const { id } = useParams();
  const [serie, setSerie] = useState(null);





  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiUrl = `https://gateway.marvel.com:443/v1/public/series/${id}?apikey=${process.env.REACT_APP_API_KEY}`;
      
      const response = await axios.get(apiUrl);
      const data = response.data.data.results[0];
      setSerie(data)
    } catch (error) {
      console.error(error);
    }
  };
  

  if (!serie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='related'>

<img id='bgd' src={Background}  alt='Loading' />

<div className="card-details-1">
  

      <img src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} alt={serie.name} />
      <h2>{serie.name}</h2>
      <p>Description: {serie.description}</p>
      <p>

                        Comics Available: <span>{serie.comics.available}</span>

                      </p>

                      <p>

                        Characters Available: <span>{serie.characters.available}</span>

                      </p>

                      <p>

                        Stories Available: <span>{serie.stories.available}</span>

                      </p>

                      <p>

                        Events Available: <span>{serie.events.available}</span>

                      </p>
      RELATED COMICS
 {serie.comics.items.map((comic) =>

 <h2>{comic.name}</h2>

 
 
 )}

{/* RELATED CHARACTERS
{serie.characters.items.map((serie)=>
 <h2>{serie.name}</h2>

)} */}

RELATED STORIES
{serie.stories.items.map((story)=>
 <h2>{story.name}</h2>

)}

          
      
      
      {/* Add more details as needed */}


    

    </div>


    </div>
    



  

  );
};

export default EventDetails;
