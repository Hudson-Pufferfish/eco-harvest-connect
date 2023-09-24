import { Service } from './service.reducer'
import './ServiceItem.css'

interface ServiceItemProps {
  service: Service
  handleDelete: (serviceId: string) => void
  handleStartEditing: (serviceId: string) => void
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  service,
  handleDelete,
  handleStartEditing,
}) => {
  return (
    <div className='service-card'>
      <h3 className='service-card-title'>{service.title}</h3>
      <p className='text-gray-600'>{service.description}</p>
      <p className='text-blue-500'>${service.price}</p>
      <p className='text-gray-500'>{service.location}</p>
      <div>
        <div className='inline-flex m-2 rounded-md shadow-sm' role='group'>
          <button
            type='button'
            className='px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-blue-400 hover:text-white focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            onClick={() => handleStartEditing(service.id)}
          >
            Edit
          </button>
          <button
            type='button'
            className='px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 rounded-r-lg hover:bg-red-400 hover:text-white focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            onClick={() => handleDelete(service.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
