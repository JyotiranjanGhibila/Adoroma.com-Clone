import React from 'react'
import {Routes,Route} from "react-router-dom"
import Camera from "../Components/Products/Camera"
import Photography from "../Components/Products/Photography"
const AllComponents = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Photography/>}/>
        </Routes>
    </div>
  )
}

export default AllComponents 