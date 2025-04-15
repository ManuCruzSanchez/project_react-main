import EventCalendar from "../../components/event-calendar/EventCalendar"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import './Home.css';

function Home() {

  return (
    <>
      <Header />
      <section>
        <div className="background">
          <div className="foward">
            <div>
              <h1>Bienvenido al Bar</h1>
              <p className="pagetext">Te damos la bienvenida a la página de Duel Bar. En nuestra página podrás encontrar toda información de tu interés relacionada a nosotros, como nuestro catálogo, menú de bebidas, y mucha más información. Todo sea por encontrar con quién combatir, mejorar nuestro nivel, saborear la victoria y una buena comida, y sobre todo disfrutar y aprender con nuestros duelos, ya sea con viejos amigos o con nuevos rivales por conocer en nuestro camino.</p>
            </div>
            <div>
              <p className="pagetext">Además de todo lo anterior, también tenemos eventos organizados para incentivar todavía más nuestra pasión y ganas por combatir, tanto para conocer a nuevos jugadores, como para ser campeón en nuestros torneos con sus respectivos premios. Si tienes curiosidad por estos como participante o espectador, tienes nuestro calendario para revisar las fechas de los eventos con información breve de estos (para más información consulte en nuestro establecimiento):</p>
            </div>
            <EventCalendar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home