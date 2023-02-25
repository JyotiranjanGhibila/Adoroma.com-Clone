import React from "react";

import SortBar from "../Components/Products/SortBar";
import GameList from "../Components/Products/GameList";
import styles from "../Styles/Games.module.css";
const Games = () => {
  return (
    <div>
      <div className={styles["games-filter-container"]}>
        <div className={styles["filter-componet"]}>
          <SortBar />
        </div>
      </div>
      <div className={styles["games-list"]}>
        <GameList />
      </div>
    </div>
  );
};

export default Games;
