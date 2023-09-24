import { Routes, Route } from 'react-router-dom'

import NotFound from '~/pages/NotFound'
import CreateService from '~/pages/Farmer/CreateService'
import FarmerProfile from '~/pages/Farmer/FarmerProfile'

export function ServiceRoutes() {
  return (
    <Routes>
      <Route path='/' element={<FarmerProfile />} />
      <Route path='/new' element={<CreateService />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}
