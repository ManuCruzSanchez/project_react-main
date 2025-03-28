import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./index.css"
import Home from './pages/home/Home'
import List from './pages/list/List'
import Menu from './pages/menu/Menu'
import Rss from './pages/rss/Rss'
import Terms from './pages/terms/Terms'
import Privacy from './pages/privacy/Privacy'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/List" element={<List />} />
          <Route path="/Rss" element={<Rss />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
