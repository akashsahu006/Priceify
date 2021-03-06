import React, { useEffect, useState } from 'react'
import ExpenseCategory from '../components/ExpenseCategory';

import ExpenseCategoryData from '../data/ExpenseCategoryData';
import Loader from '../components/Loader';
import Map from '../components/Map';

import {useParams} from "react-router-dom"


const CityInfo = () => {

  const [loading, setLoading] = useState(true);
  const [currency,setCurrency] = useState(true);
  const [data,setData] = useState(localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')));
  const [expenseCategoryArray,setExpenseCategoryArray] = useState(ExpenseCategoryData);



  const params = useParams();

  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://cost-of-living-and-prices.p.rapidapi.com/prices',
    params: {city_name: params.city, country_name: params.country},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
    }
  };



  const getData= async () => {
    
    

    if(data && data.city_name=== params.city){
      // console.log("request was not made");
      

      
    }
    else{
      setLoading(true);

      axios.request(options).then(async function (response) {
        setData(response.data);

        localStorage.setItem("data",JSON.stringify(response.data));
        
        // console.log("request was made");
      }).catch(function (error) {
        console.error(error);
      });

      
    }
    setLoading(false);
    
      
  } 

  useEffect( ()=>{
    getData();
  },[]);


  if(!loading && data){
    if(data.error==="Couldn't find a city with a given name or id"){
      return (
        <div className='w-screen h-screen flex justify-center items-center'>
          <h1 className='font-black m-10 tracking-wider text-xl'>Sorry we could not find the location :(</h1>
        </div>
      )
    }
    return (
      
      <div className='h-screen flex items-center flex-col'>
          <h1 className='font-black m-10 tracking-wider text-xl'>{data.city_name}, {data.country_name}</h1>
          <button className='rounded-lg mb-2 px-2 py-1 bg-blue-600 text-blue-100 hover:bg-blue-700 hover:shadow-lg duration-300' onClick={() =>setCurrency(!currency)}>{currency ? <><h2>{data.prices[0].currency_code} to USD </h2></> : <h2>USD to {data.prices[0].currency_code}</h2>}</button>
          
          
          {expenseCategoryArray.map((category) =>{
            return (
              <ExpenseCategory key={category.id} header={category.headar} whichExpense={category.whichExpense} data={data.prices} currency={currency}/>
            )
          })}
          {/* <div className='p-8 flex justify-center items-center'>
            <Bar/>
          </div> */}
          <div className='flex justify-center items-center w-screen '>
            <Map country={data.country_name} city={data.city_name}/>
          </div>

      </div>
    )
  }
    return (
      <Loader/>
    )
  }

export default CityInfo