import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <div className='col d-flex justify-content-center gap-5'>

    <Link className='text-decoration-none' to={`/game/${game.id}`}>

      <Card style={{ width: '18rem', backgroundColor: '#32383e', borderRadius: '2px', height: '250px' }}>
        <Card.Img className='card-img' variant="top" src={game.thumbnail} alt={game.title} style={{ objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title className='text-white-50'>{game.title}</Card.Title>
        </Card.Body>
      </Card>

    </Link>

    </div>
  );
};

const CardList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          'https://free-to-play-games-database.p.rapidapi.com/api/games',
          {
            headers: {
              'X-RapidAPI-Key': '0911bf3de3mshc78d91d62f8628ep141c13jsnb29cd0465251', 
            },
            params: {
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
              platform: 'browser',
            },
          }
        );
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div className="card-list">
        <Row className="d-flex justify-content-center gap-4">
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </Row>
    </div>
  );
};

export default CardList;
