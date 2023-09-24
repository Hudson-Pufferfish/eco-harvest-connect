import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/store'
import { startEditingService, removeService } from './service.reducer'
import ServiceItem from './ServiceItem'

function ServiceList() {
  const serviceList = useSelector((state: RootState) => state.service.serviceList)

  const dispatch = useDispatch()
  const handleDelete = (serviceId: string) => {
    dispatch(removeService(serviceId))
  }
  const handleStartEditing = (serviceId: string) => {
    dispatch(startEditingService(serviceId))
  }

  return (
    <div>
      <h2 className='mb-4 text-2xl font-semibold'>ServiceList Page</h2>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4'>
        {serviceList.map((service) => (
          <div key={service.id} className='max-w-md'>
            <ServiceItem
              key={service.id}
              service={service}
              handleDelete={handleDelete}
              handleStartEditing={handleStartEditing}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceList
