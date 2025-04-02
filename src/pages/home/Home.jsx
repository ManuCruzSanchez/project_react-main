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
          <div>
            <h1>Bienvenido al Bar</h1>
            <p className="pagetext">Bienvenido/a 
              voluptatibus deleniti illo quibusdam obcaecati omnis corrupti culpa ipsum soluta inventore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem saepe non, earum ipsam rem nesciunt aspernatur accusantium? Recusandae blanditiis, optio libero magni, saepe, animi a deleniti debitis voluptate aliquid repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus impedit, mollitia eum fugit cupiditate dignissimos. Quos aspernatur eius ad totam distinctio nobis nulla? Unde, impedit. Quam cupiditate sunt optio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis aliquam laboriosam magni vero cupiditate ad dolor excepturi. Debitis ducimus ipsam voluptates modi ut quos soluta harum iure ipsa accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime laboriosam cumque, tempora possimus quae molestias illo iusto aliquam quos adipisci quo dolorum sed deserunt quis ex nisi accusamus obcaecati. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quam incidunt quasi quas placeat animi cum beatae necessitatibus sit repellendus. Inventore, esse! Et enim ducimus harum sed, asperiores quasi obcaecati?</p>
          </div>
          <div>
            <p className="pagetext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam incidunt animi, quam hic nostrum quasi atque nobis cum itaque, voluptatibus deleniti illo quibusdam obcaecati omnis corrupti culpa ipsum soluta inventore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem saepe non, earum ipsam rem nesciunt aspernatur accusantium? Recusandae blanditiis, optio libero magni, saepe, animi a deleniti debitis voluptate aliquid repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus impedit, mollitia eum fugit cupiditate dignissimos. Quos aspernatur eius ad totam distinctio nobis nulla? Unde, impedit. Quam cupiditate sunt optio?</p>
          </div>
          <EventCalendar />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home