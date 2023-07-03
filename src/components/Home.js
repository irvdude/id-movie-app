import React from 'react'
import SearchBar from './SearchBar'
import '../index.css';


function Home() {
  return (
    <div>
        <h1 className='text-green-500'>IMDB TOP 100 MOVIES</h1>
        <SearchBar />
    </div>
  )
}

export default Home