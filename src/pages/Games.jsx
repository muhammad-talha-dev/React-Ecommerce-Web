import React, { useEffect } from 'react'
import WebHeader from '../components/WebHeader';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import AllGames from '../components/AllGames';

function Home() { 

  return (
    <div className='pt-5' style={{ backgroundColor: '#272b30'}}>
      <WebHeader /> 

      <div className='container py-5'>
        <AllGames />
      </div>
      
      <Footer />
    </div>
  )
}

export default Home