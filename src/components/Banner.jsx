import React from 'react'
import '../App.css'

function Banner() {
  return (
    <>
            <div id='banner'>
                <div id='banner-textbox' className='container d-flex align-items-center justify-content-center'>
                    <div id='banner-text' className='text-light text-center'>
                        <h1 className='pb-1'>Discover the best free-to-play games!</h1>
                        <h5>Track what you've played and search for what to play next! Plus get free premium loot!</h5>
                        <div>
                            <button className='btn btn-primary me-3 my-3'>GET STARTED</button>
                            <button className='btn btn-outline-light'>BROWSE GAMES</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Banner