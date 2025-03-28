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
          description: data.description
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
      <ul>
        {
          gameList.map(d => {
            return (
              <li id={`item-${d.key}`}>{d.name} - {d.develop} - {d.description}</li> 
            )
          })
        }
      </ul>

    </>
  )
}

export default GameList