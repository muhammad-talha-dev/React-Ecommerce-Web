import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { useGameContext } from '../context/GameContext';
// import { useLibraryContext } from '../context/LibraryContext';

function GamePage() {
  const { GameId } = useParams();
  const [gameData, setGameData] = useState({});
  // const { state: gameContextState } = useGameContext();
  // const { dispatch: libraryDispatch } = useLibraryContext();

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          'https://free-to-play-games-database.p.rapidapi.com/api/game',
          {
            headers: {
              'X-RapidAPI-Key': '0911bf3de3mshc78d91d62f8628ep141c13jsnb29cd0465251',
            },
            params: {
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
              id: GameId,
            },
          }
        );
        setGameData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromAPI();
  }, [GameId]);

  // const handleAddToLibrary = () => {
  //   if (gameContextState.gameData) {
  //     libraryDispatch({ type: 'ADD_TO_LIBRARY', payload: gameContextState.gameData });
  //   }
  // };

  // console.log(...gameData)

  const addToLibrary = () => {
    console.log(gameData)
    const payload = {
        ...gameData
    }
    console.log(payload)
  }


  return (
    <div className='text-white' style={{ backgroundColor: '#272b30' }}>

        <div className='container'>

            <div className='row py-5'>
                <div className='col-md-6 d-flex flex-column justify-content-center' style={{ height: '300px' }}>
                    <img className='img-fluid' src={gameData.thumbnail} alt={gameData.title} />
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                    <h3>{gameData.title}</h3>
                    <p>{gameData.short_description}</p>
                    <div className="d-flex">
                        <p className='p-1 border'>Genre: {gameData.genre}</p>
                        <p className='p-1 ms-3 border'>Platform: {gameData.platform}</p>
                        <p className='p-1 ms-3 border'>Publisher: {gameData.publisher}</p>
                    </div>
                    <button className='btn mt-3 btn-primary btn-block' onClick={addToLibrary} style={{width: '100%'}}>Add to Library</button>
                </div>  
            </div>

        </div>
     
    </div>
  );
}

export default GamePage;
