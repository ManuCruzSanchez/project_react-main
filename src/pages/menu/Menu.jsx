import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const myArray = ['15','2', '3'];
const ejemplo = myArray.map((item) => <p>{item}</p>)

function Menu() {

  return (
    <>
      <Header />
      <p>pagina MENU</p>
      {myArray.map((item, index) => {return <p key={index}>{item}</p>})}
      <Footer />
    </>
  )

}

export default Menu