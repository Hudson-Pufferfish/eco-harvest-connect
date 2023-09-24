import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0()
  const dispatch = useDispatch()

  const handleLogin = () => {
    if (isAuthenticated) {
      const session = {
        id: user.id,
        name: user.name || '',
        nickname: user.nickname || '',
        picture: user.picture || '',
        updated_at: user.updated_at || '',
        email: user.email || ''
      }

      dispatch(addSession(session))
      console.log('Session added:', session)
    } else {
      loginWithRedirect()
    }
  }

  return (
    !isAuthenticated && (
      <button onClick={handleLogin} className='login-btn'>
        Sign In
      </button>
    )
  )
}

export default LoginButton
