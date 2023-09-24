import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <nav className='nav-bar'>
        <div className='px-6 lg:px-8'>
          <div className='hidden sm:block'>
            <div className='flex'>
              <Link
                to='/'
                className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-6 py-4 text-sm font-medium'
                aria-current='page'
              >
                Home
              </Link>
              <Link
                to='/guest'
                className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-6 py-4 text-sm font-medium'
              >
                Guest
              </Link>
              <Link
                to='/service'
                className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-6 py-4 text-sm font-medium'
              >
                Service
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
