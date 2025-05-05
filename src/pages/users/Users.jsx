import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import UserList from "../../components/user-list/UserList"
import './Users.css'

function Users() {
  return (
    <>
      <Header />
        <section>
          <div className="background">
            <div>
              <h1>Jugadores locales</h1>
                <p className="pagetext">En esta página puedes introducir tu nombre y juego insignia, y de esta forma ser visible a demás jugadores para poder encontar oponentes más facilmente. Una vez estés en el local, bastará con preguntar por ellos y, ¡A LUCHAR!</p>
                <p>agregar formulario</p>
                <p className="pagetext">Aquí tienes la lista de los jugadores registrados:</p>
                <p>agregar lista de firebase "USUARIOS"</p>
                <UserList />
            </div>
          </div>
        </section>
      <Footer />
    </>      
  )
}

export default Users