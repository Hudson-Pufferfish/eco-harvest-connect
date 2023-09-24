import LogoutButton from './pages/Registration/LogoutButton'
import LoginButton from './pages/Registration/LoginButton'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../src/pages/NotFound'
import { ServiceRoutes } from './routes/ServiceRoutes'
import { GuestRoutes } from './routes/GuestRoutes'
import { useAuth0 } from '@auth0/auth0-react'
import NavBar from './pages/NavBar'

function App() {
  const { isLoading, error } = useAuth0()
  const { user, isAuthenticated } = useAuth0()

  return (
    <main className='column'>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <NavBar />
          <div className='backdrop'>
            <h1 class='text-3xl font-medium text-primary my-10'>Eco Harvest Connect!</h1>
            <LoginButton />
            <LogoutButton />
            <Home />
          </div>
        </>
      )}
      {isAuthenticated && (
        <>
          <Routes>
            <Route path='/' element={<Home user={user} />} />
            <Route path='/service/*' element={<ServiceRoutes />} />
            <Route path='/guest/*' element={<GuestRoutes />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </>
      )}
    </main>
  )
}
// const HomeContent = ({ user }) => {
//   return (
//     <article>
//       {user?.picture && <img src={user.picture} alt={user?.name} />}
//       <h2>{user?.name}</h2>
//       <ul>
//         {Object.keys(user).map((objKey, i) => (
//           <li key={i}>
//             {objKey}: {user[objKey]}
//           </li>
//         ))}
//       </ul>
//     </article>
//   );
// };

export default App
