import React, { useEffect } from 'react'
import WebHeader from '../components/WebHeader';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import CardList from '../components/CardList';

function Home() { 

  return (
    <div style={{ backgroundColor: '#272b30'}}>
      <Banner />

      <div className='container py-5'>
        <CardList />
      </div>
      
    </div>
  )
}

export default Home