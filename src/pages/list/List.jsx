import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import GameList from "../../components/game-list/GameList";


const myArray = ['1','2', '3'];

function List() {
  console.log(GameList)
  return (
    <>
      <Header />
              
      <GameList />

      <Footer />
    </>
  )
}

export default List