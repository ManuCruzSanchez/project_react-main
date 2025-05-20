import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import GameList from "../../components/game-list/GameList";
import "./List.css";


const myArray = ['1','2', '3'];

function List() {
  console.log(GameList)
  return (
    <>
      <Header />
      <section>
        <div className="background">
          <div className="foward">
            <h1>Lista de Juegos</h1>
            <p className="pagetext">Aquí encontrarás todos los juegos actualmente disponibles para luchar en nuestros locales, lastimosamente no tenemos todos los juegos, pero iremos actualizando la lista con el tiempo. Dentro de nuestro local podrás jugarlos siempre que tengas un control, de no ser el caso deberás alquilar uno.</p>
          </div>
          <div className="background-list">
          <h1>Duel Bar</h1>
            <div className="list-text">
              <GameList />
            </div>
          </div>
        </div>

      </section> 

      <Footer />
    </>
  )
}

export default List