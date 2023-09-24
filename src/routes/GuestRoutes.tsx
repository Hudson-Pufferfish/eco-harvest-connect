import { Routes, Route } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import Guest from '~/pages/Guest/Guest'

export function GuestRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Guest />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}
