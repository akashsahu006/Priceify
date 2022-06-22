import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const SearchBar = () => {
    const navigate= useNavigate();

    const [city,setCity] = useState("");
    const [country,setCountry] = useState("");

    const submitHandler = () => {
        // e.preventDefault();
        navigate('/city/'+country + '/'+ city);
    }

    console.log(city);
    return (
    <div className='w-1/5'>
        <form action="" className='my-2 bg-opacity-10 rounded-2xl p-4  flex justify-start items-center px-4 py-4 bg-black  ' >
            <input onChange={(e) => setCity(e.target.value)} className='px-4 w-full bg-transparent placeholder-white placeholder:text-lg  ' type="text" placeholder='City' />
        </form>
        <form action="" className='my-2 bg-opacity-10 rounded-2xl p-4  flex justify-start items-center px-4 py-4 bg-black  ' >
            <input onChange={(e) => setCountry(e.target.value)} className='px-4 w-full bg-transparent placeholder-white placeholder:text-lg  ' type="text" placeholder='Country' />
        </form>
        <div className='flex justify-center items-center'>
            <button onClick={() => submitHandler()} className='rounded-lg mb-2 px-2 py-1 bg-blue-600 text-blue-100 hover:bg-blue-700 hover:shadow-lg duration-300' >Search</button>
        </div>
    </div>
  )
}

export default SearchBar