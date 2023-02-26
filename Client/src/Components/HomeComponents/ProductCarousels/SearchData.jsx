import React from 'react'

const SearchData = ({img,title,brand}) => {
   
   console.log(title,brand,"MIll gaya")
  return (
    <div >
      <img src={img} alt="x" />
      <h1>{title}</h1>
    </div>
  )
}

export default SearchData