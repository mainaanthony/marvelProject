import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Background from '../Images/stars-1837306.jpg'

const CharacterDetails = ({i}) => {


  console.log('shittty code')
  const { id } = useParams();
  const [character, setCharacter] = useState(null);





  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiUrl = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${process.env.REACT_APP_API_KEY}`;
      
      const response = await axios.get(apiUrl);
      const data = response.data.data.results[0];
      setCharacter(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!character) {
    return <div>Loading...</div>;
  }


const {comics} = character



  return (
    <div className='related'>

<img id='bgd' src={Background}  alt='Loading' />






<div className="card-details-1">
  

      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Description: {character.description}</p>
      <p>

                        Comics Available: <span>{character.comics.available}</span>

                      </p>

                      <p>

                        Series Available: <span>{character.series.available}</span>

                      </p>

                      <p>

                        Stories Available: <span>{character.stories.available}</span>

                      </p>

                      <p>

                        Events Available: <span>{character.events.available}</span>

                      </p>
      RELATED COMICS
 {character.comics.items.map((comic) =>

 <h2>{comic.name}</h2>

 
 
 )}

RELATED SERIES
{character.series.items.map((serie)=>
 <h2>{serie.name}</h2>

)}

RELATED STORIES
{character.stories.items.map((story)=>
 <h2>{story.name}</h2>

)}

          
      

      
      {/* Add more details as needed */}


    

    </div >



    



    








    </div>
    
   


  

  );
};

export default CharacterDetails;
