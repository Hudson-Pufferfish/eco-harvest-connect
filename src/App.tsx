import { Route, Routes, Link } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { ServiceRoutes } from './routes/ServiceRoutes'
import { GuestRoutes } from './routes/GuestRoutes'

function App() {
  return (
    <>
      <nav>
        <ul className='my-nav'>
          <li>
            <Link to='/' className='my-btn'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/guest' className='my-btn'>
              Guest
            </Link>
          </li>
          <li>
            <Link to='/service' className='my-btn'>
              Service
            </Link>
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
