import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import './App.scss'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Uiux from './components/Portfolio/Uiux'
import Softwareexperience from './components/Portfolio/Softwareexperience'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Uiux" element={<Uiux />} />
          <Route path="Softwareexperience" element={<Softwareexperience />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
