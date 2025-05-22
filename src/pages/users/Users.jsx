import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import UserList from "../../components/user-list/UserList"

function Users() {
  return (
    <>
      <Header />
        <section>
          <div className="background">
            <div className="foward">
              <h1>Lista de Jugadores</h1>
                <p className="pagetext">En esta página puedes introducir tu nombre y juego insignia, y de esta forma ser visible a demás jugadores para poder encontar oponentes más facilmente. De esta forma será más fácil coincidor con gente para combatir, tanto en persona, como en línea. Una vez encuentres a tu contrincante, ¡A LUCHAR!</p>
                <p className="pagetext">Aquí tienes la lista de los jugadores registrados:</p>
                <UserList />
            </div>
          </div>
        </section>
      <Footer />
    </>      
  )
}

export default Users