import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import GamesList from "../../assets/games.json"

const myArray = ['1','2', '3'];

function List() {
  console.log(GamesList)
  return (
    <>
      <Header />
      <p>
        pagina LIST
        </p>
        <ul>
        {GamesList.GamesList.map((juego) => (
          <li key={juego.id}>
            <h2>{juego.nombre}</h2>
            <p><strong>Desarrollador:</strong> {juego.desarrollador}</p>
            <p><strong>Descripción:</strong> {juego.descripcion}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  )
}

export default List