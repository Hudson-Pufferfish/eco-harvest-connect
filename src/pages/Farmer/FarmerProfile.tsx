import React from 'react'
import { useNavigate } from 'react-router-dom'

const FarmerProfile: React.FC = () => {
  const farmer = {
    name: 'John Doe',
    age: 35,
    location: 'Farmville',
    crops: ['Corn', 'Soybeans', 'Wheat'],
    livestock: ['Cows', 'Sheep', 'Chickens'],
  }

  const navigate = useNavigate()

  const handleNewServiceClick = () => {
    navigate('/service/new')
  }

  return (
    <div className='container mx-auto'>
      <div className='p-4 bg-white rounded-lg shadow-lg'>
        <h1 className='mb-4 text-2xl font-bold'>Farmer Profile</h1>
        <p>
          <span className='font-semibold'>Name:</span> {farmer.name}
        </p>
        <p>
          <span className='font-semibold'>Age:</span> {farmer.age}
        </p>
        <p>
          <span className='font-semibold'>Location:</span> {farmer.location}
        </p>
        <div className='mt-4'>
          <p className='font-semibold'>Crops:</p>
          <ul className='list-disc list-inside'>
            {farmer.crops.map((crop, index) => (
              <li key={index}>{crop}</li>
            ))}
          </ul>
        </div>
        <div className='mt-4'>
          <p className='font-semibold'>Livestock:</p>
          <ul className='list-disc list-inside'>
            {farmer.livestock.map((animal, index) => (
              <li key={index}>{animal}</li>
            ))}
          </ul>
        </div>
        <button
          className='px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
          onClick={handleNewServiceClick}
        >
          Create New Service
        </button>
      </div>
    </div>
  )
}

export default FarmerProfile
