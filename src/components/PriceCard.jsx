import React from 'react'

const PriceCard = (props) => {
  return (
    <div className='w-2/3 drop-shadow-xl rounded-xl bg-cyan-100 flex justify-center items-center m-2 flex-col'>
        <div>
            <h2>{props.data.item_name}</h2>
        </div>
        <div className='flex flex-row justify-evenly w-full'>
            <h3>{props.currency ? <>Minimum: {props.data.currency_code} {props.data.min}</> : <>Minimum: USD {props.data.usd.min}</>}</h3>
            <h3>{props.currency ? <>Average: {props.data.currency_code} {props.data.avg}</> : <>Average: USD {props.data.usd.avg}</>}</h3>
            <h3>{props.currency ? <>Maximum: {props.data.currency_code} {props.data.max}</> : <>Maximum: USD {props.data.usd.max}</>}</h3>

        </div>
        
    </div>
    
  )
}

export default PriceCard