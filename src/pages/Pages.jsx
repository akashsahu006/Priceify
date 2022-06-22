import Home from "./Home"
import CityInfo from "./CityInfo"
import {Routes, Route} from "react-router-dom"


const Pages = () => {
  return (
    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/city/:country/:city" element={<CityInfo/>} />
        </Routes>
  )
}

export default Pages