import React from 'react'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <div className='  h-screen w-screen flex items-center flex-col'>
      <h1 className='mt-16 mb-16 text-white text-3xl font-antic font-semibold tracking-widest'>
        Priceify
      </h1>
      <SearchBar/>

      <h2 className='my-4 font-semibold text-white'>
        Website is under Construction
      </h2>
    </div>
  )
}

export default Home