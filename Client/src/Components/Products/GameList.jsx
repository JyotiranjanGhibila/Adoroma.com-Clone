import React from 'react'
import GameCard from './GameCard'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getGames } from '../../Redux/Products/action'
import styles from "../../Styles/GamesList.module.css"
import { useLocation,useSearchParams } from 'react-router-dom'
const GameList = () => {
  const dispatch=useDispatch()
  const games=useSelector((store)=>store.games)
  const location=useLocation()
  const [searchParams]=useSearchParams()

  // console.log(location)
  
  useEffect(()=>{
    const order=searchParams.get('order')
    let paramObj={
      params:{ 
        category:searchParams.getAll('category'),
        _sort: order && "price",
        _order: order,
      }
    }
   dispatch(getGames(paramObj))
  },[location.search])
  return (
    <div className={styles.container}>
      {
        games.length>0 && games.map((el)=>{
          return  <GameCard key={el.id} game={el}/>
        })
      }
       
    </div>
  )
}

export default GameList