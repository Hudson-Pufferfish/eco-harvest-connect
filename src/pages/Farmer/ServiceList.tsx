import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/store'
import { startEditingService, removeService } from './service.reducer'
import ServiceItem from './ServiceItem'
import { useMemo, useState } from 'react'

function ServiceList() {
  const serviceList = useSelector(
    (state: RootState) => state.service.serviceList,
  )
  const [searchKeyword, setSearchKeyword] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const dispatch = useDispatch()
  const handleDelete = (serviceId: string) => {
    dispatch(removeService(serviceId))
  }
  const handleStartEditing = (serviceId: string) => {
    dispatch(startEditingService(serviceId))
  }

  const filteredServiceList = useMemo(() => {
    let filteredList = serviceList
    if (searchKeyword) {
      filteredList = filteredList.filter(
        (service) =>
          service.location &&
          service.location.toLowerCase().includes(searchKeyword.toLowerCase()),
      )
    }
    return filteredList.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })
  }, [serviceList, searchKeyword, sortOrder])

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <div>
      <h2 className='mt-2 mb-4 text-4xl font-bold text-center text-white'>
        Service List
      </h2>
      <div className='flex items-center justify-center max-w-3xl py-8 mx-auto mb-4 bg-white rounded-lg shadow-lg '>
        <input
          type='text'
          placeholder='Search by location...'
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500'
        />
        <button
          className='px-4 py-2 ml-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500'
          onClick={toggleSortOrder}
        >
          Sort by Price {sortOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>
      <div className='grid grid-cols-4 gap-4 mx-8'>
        {filteredServiceList.map((service) => (
          <div key={service.id} className='max-w-sm'>
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
