import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"


const SortBar = () => {
  const [searchParams,setSearchParams]=useSearchParams()

  const initialState=searchParams.getAll("category")
  const [category,setCategory]=useState(initialState || [])
 
  const handleFilter=(e)=>{
    let newCategory=[...category]
     if(newCategory.includes(e.target.value)){
      newCategory.splice(newCategory.indexOf(e.target.value),1)
     }else{
      newCategory.push(e.target.value)
     }
     setCategory(newCategory)
  }
  // console.log(category)
  console.log(searchParams)

  useEffect(()=>{
      const params={
        category
      }
      setSearchParams(params)
  },[category])
  return (
    <div>
      <h3>Filter By</h3>
      <div>
        <input type="checkbox" value="lapgames" onChange={handleFilter} checked={category.includes('lapgames')}/>
        <label>Gaming Laptops</label>
      </div>
      <div>
        <input type="checkbox" value="PS5" onChange={handleFilter} checked={category.includes("PS5")}/>
        <label>Ps5 Games</label>
      </div>
      <div>
        <input type="checkbox" value="Controller" onChange={handleFilter} checked={category.includes("Controller")}/>
        <label>Controller</label>
      </div>
      <div>
        <input type="checkbox" value="pcgames" onChange={handleFilter} checked={category.includes("pcgames")} />
        <label>Gaming PCs</label>
      </div>
    </div>
  );
};

export default SortBar;
