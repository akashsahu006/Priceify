import { useState } from "react"
import PriceCard from "./PriceCard"

const ExpenseCategory = (props) => {

    const [isShow, setIsShow] = useState(false);

  return (
    <>
    {/* <h1 className='font-semibold'>Grocery Expenses</h1> */}
    <div className="flex justify-center items-center w-1/3 ">
      <h1 className='text-lg flex justify-center font-semibold w-1/2'>{props.header}</h1>
      <button className=" inline-block px-3 py-0.5 bg-blue-600  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg " onClick={() => setIsShow(!isShow)}>{isShow ? <h2>Hide</h2>: <h2>Show</h2>}</button>
    </div>
    
    {isShow && props.data.filter((price) => price.category_name===props.whichExpense).map((price) =>{
        return (
        <PriceCard key={price.good_id} data={price} currency={props.currency}/>
        )
    })}
    </>
    
  )
}

export default ExpenseCategory