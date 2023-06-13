import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Background from '../Images/stars-1837306.jpg'

const  CreatorDetails = () => {


  console.log('shittty code')
  const { id } = useParams();
  const [creator, setCreator] = useState(null);





  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiUrl = `https://gateway.marvel.com:443/v1/public/creators/${id}?apikey=${process.env.REACT_APP_API_KEY}`;
      
      const response = await axios.get(apiUrl);
      const data = response.data.data.results[0];
      setCreator(data)
    } catch (error) {
      console.error(error);
    }
  };
  

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div className='related'>

<img id='bgd' src={Background}  alt='Loading' />

<div className="card-details-1">
  

      <img src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`} alt={creator.name} />
      <h2>{creator.name}</h2>
      <p>Description: {creator.description}</p>
      
      {/* <p>

                        Comics Available: <span>{creator.comics.available}</span>

                      </p> */}

                      {/* <p>

                        Series Available: <span>{creator.series.available}</span>

                      </p>

                      <p>

                        Stories Available: <span>{creator.stories.available}</span>

                      </p> */}

                      {/* <p>

                        Events Available: <span>{creator.events.available}</span>

                      </p> */}

                      {/* <p>

                   Characters Available: <span>{creator.characters.available}</span>

</p> */}

      {/* RELATED COMICS
 {creator.comics.items.map((comic) =>

 <h2>{comic.name}</h2>

 
 
 )} */}

{/* RELATED SERIES
{creator.series.items.map((serie)=>
 <h2>{serie.name}</h2>

)} */}

{/* RELATED STORIES
{creator.stories.items.map((story)=>
 <h2>{story.name}</h2>

)} */}
{/* RELATED CHARACTERS
{creator.characters.items.map((story)=>
<h2>{story.name}</h2>

)} */}

          
      
      {/* Add more details as needed */}


    

    </div>


    </div>
    



  

  );
};

export default CreatorDetails;
