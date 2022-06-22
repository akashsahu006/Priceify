import React from 'react'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <div className='  h-screen w-screen flex items-center flex-col'>
      <h1 className='mt-16 mb-16 text-white text-4xl font-antic font-semibold tracking-widest'>
        Priceify
      </h1>
      <h2 className=' text-white text-sm font-antic font-semibold tracking-widest'>Visiting or shifting to a new place?</h2>
      <h2 className=' text-white text-sm font-antic font-semibold tracking-widest'>Are you worried about your expense planning?</h2>
      <h2 className='mb-12 text-white text-sm font-antic font-semibold tracking-widest'>Get price information of different things in your destination and plan your expenses beforehand!</h2>
      <SearchBar/>

      <h2 className='my-4 font-semibold text-white'>
        Website is under Construction
      </h2>
    </div>
  )
}

export default Home