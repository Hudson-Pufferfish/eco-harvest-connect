import CreateService from './pages/Farmer/CreateService'
import Home from './pages/Home'
import { Route, Routes, Link } from 'react-router-dom'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/farmer'>Farmer</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/farmer' element={<CreateService />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
