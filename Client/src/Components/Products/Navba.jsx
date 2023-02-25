import React from 'react'
import {Link} from "react-router-dom"
import styles from "../../Styles/Navba.module.css"
const Navba = () => {
  return (
    <div className={styles.navba_container}>
      <h1>Games Section</h1>
      <Link to={'/'}>Gaming</Link>
      <Link too={"/login"}>Login</Link>
    </div>
  )
}

export default Navba