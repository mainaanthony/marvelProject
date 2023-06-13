import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Background from '../Images/stars-1837306.jpg'

const  ComicsDetails = () => {


  console.log('shittty code')
  const { id } = useParams();
  const [comic, setComic] = useState(null);





  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiUrl = `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${process.env.REACT_APP_API_KEY}`;
      
      const response = await axios.get(apiUrl);
      const data = response.data.data.results[0];
      setComic(data)
    } catch (error) {
      console.error(error);
    }
  };
  

  if (!comic) {
    return <div>Loading...</div>;
  }

  return (
    <div className='related'>

<img id='bgd' src={Background}  alt='Loading' />

<div className="card-details-1">
  

      <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.name} />
      <h2>{comic.name}</h2>
      <p>Description: {comic.description}</p>


      <p>

                        Characters Available: <span>{comic.characters.available}</span>

                      </p>

                      {/* <p>

                        Series Available: <span>{comic.series.available}</span>

                      </p> */}

                      <p>

                        Stories Available: <span>{comic.stories.available}</span>

                      </p>

                      <p>

                        Events Available: <span>{comic.events.available}</span>

                      </p>
      {/* RELATED CHARACTERS
 {comic.characters.items.map((character) =>

 <h2>{comic.name}</h2>

 
 
 )} */}

{/* RELATED SERIES
{comic.series.items.map((serie)=>
 <h2>{serie.name}</h2>

)} */}

RELATED STORIES
{comic.stories.items.map((story)=>
 <h2>{story.name}</h2>

)}

          
      
      
      {/* Add more details as needed */}


    

    </div>


    </div>
    



  

  );
};

export default ComicsDetails;
