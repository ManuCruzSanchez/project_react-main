import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./index.css"
import Home from './pages/home/Home'
import List from './pages/list/List'
import Menu from './pages/menu/Menu'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/List" element={<List />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
