import { Route, Routes, Link } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { ServiceRoutes } from './routes/ServiceRoutes'
import { GuestRoutes } from './routes/GuestRoutes'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/guest'>Guest</Link>
          </li>
          <li>
            <Link to='/service'>Service</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service/*' element={<ServiceRoutes />} />
        <Route path='/guest/*' element={<GuestRoutes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
