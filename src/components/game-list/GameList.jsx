import { useEffect, useState } from "react";
import gameListService from "../../services/game-list/GameListService";

function GameList() {
  const [gameList, setGameList] = useState([]);

  const getAllGameList = () => {
    gameListService.getAllGameList().then((items) => {
      let allGameList = [];
      items.forEach(item => {
        const key = item.key;
        const data = item.val();
        allGameList.push({
          key: key,
          name: data.name,
          develop: data.develop,
          imageUrl: data.imageUrl
        });
      });
      setGameList([...allGameList]);
    })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getAllGameList();
  }, [])

  return (
    <>
      <div>
        {
          gameList.map(d => {
            return (
              <div id={`item-${d.key}`}>{d.name} - {d.develop}
              <img src={d.imageUrl} alt=""/></div> 
            )
          })
        }
      </div>
        
    </>
  )
}

export default GameList