import React, { useContext } from 'react'
import { ServicesContext, Service } from '~/context/ServicesProvider'

interface ServiceCardProps {
  service: Service
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className='p-4 mb-4 border rounded-md'>
      <h3 className='text-lg font-semibold'>{service.title}</h3>
      <p className='text-gray-600'>{service.description}</p>
      <p className='text-blue-500'>${service.price}</p>
      <p className='text-gray-500'>{service.location}</p>
    </div>
  )
}

// Define the Guest component
function Guest() {
  const { state } = useContext(ServicesContext)

  return (
    <div>
      <h2 className='mb-4 text-2xl font-semibold'>Guest Page</h2>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4'>
        {state.serviceList.map((service) => (
          <div key={service.id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Guest
