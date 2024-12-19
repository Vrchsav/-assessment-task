import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import ClassMenu from './components/ClassMenu/ClassMenu'
import { Route, Routes } from 'react-router-dom'
import Passengers from './pages/Passengers/Passengers'
import Home from './pages/Home/Home'
import Posts from './pages/Posts/Posts'

function App() {
  const [endClassMenu, setEndClassMenu] = useState(false);  // State to toggle class menu visibility

  return (
    <>
      {endClassMenu ? <ClassMenu setEndClassMenu={setEndClassMenu}/> : <></>}  {/* Conditionally render ClassMenu */}
      
      <Navbar SetEndClassMenu={setEndClassMenu} />  {/* Navbar component with class menu toggle */}

      <Routes>
          <Route path="/" element={<Home/>} />  {/* Route for home page */}
          <Route path='/passengers' element={<Passengers/>} />  {/* Route for passengers page */}
          <Route path="/post" element={<Posts/>} />  {/* Route for posts page */}
      </Routes>
    </>
  )
}

export default App
