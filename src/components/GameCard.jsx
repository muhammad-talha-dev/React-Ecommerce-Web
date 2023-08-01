// import React, { useEffect, useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import axios from 'axios';

// function GameCard() {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     const fetchDataFromAPI = async () => {
//       try {
//         const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
//           headers: {
//             'X-RapidAPI-Key': '0911bf3de3mshc78d91d62f8628ep141c13jsnb29cd0465251'
//           },
//           params: {
//             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
//             // tag : '3d.mmorpg.fantasy.pvp',
//             // platform : 'pc'
//           }
//         });
//         setGames(response.data);
//         // Process the retrieved data
//       } catch (error) {
//         console.error(error);
//         // Handle any errors
//       }
//     };

//     fetchDataFromAPI();
//   }, []);

//   return (
//     <>
//       {
//         games.map((val, key) => (
//           <Card style={{ width: '18rem', backgroundColor: '#32383e', borderRadius: '2px' }} key={id}>
//             <Card.Img variant="top" src={val} />
//             <Card.Body>
//               <Card.Title className='text-white-50'>{val}</Card.Title>
//               {/* <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text> */}
//               {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//           </Card>
//         ))
//       }
//     </>
//   );
// }

// export default GameCard;
