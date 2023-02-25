import React from 'react'

const GameCard = ({game}) => {
  const {img,title,price}=game
  return (
    <div>
       <img src={img} alt="img"/>
       <h3>{title}</h3>
       <p>price: {price}</p>
       <button>View More</button>
    </div>
  )
}

export default GameCard