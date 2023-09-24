import { Route, Routes, Link } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import { ServiceRoutes } from '../routes/ServiceRoutes';
import { GuestRoutes } from '../routes/GuestRoutes';

function NavBar() {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="hidden sm:block">
                <div className="nav-bar">
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font1-medium" aria-current="page">Home</Link>
                    <Link to="/guest" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium">Guest</Link>
                    <Link to="/service" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium">Service</Link>
                </div>
            </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/*" element={<ServiceRoutes />} />
        <Route path="/guest/*" element={<GuestRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default NavBar;
