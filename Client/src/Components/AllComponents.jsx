
import React from 'react'
import {Routes,Route} from "react-router-dom"
// import Camera from "../Components/Products/Camera"
import Photography from "../Components/Products/Photography"
import Gaming from './Products/Gaming'
// import SingleProduct from '../Pages/single-product/SingleProduct'
const AllComponents = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Photography/>}/>
          <Route path='/gaming' element={<Gaming/>}/>
        </Routes>
    </div>
  )
}

export default AllComponents 