import React from 'react'

const FarmerProfile: React.FC = () => {
  const farmer = {
    name: 'John Doe',
    age: 35,
    location: 'Farmville',
    crops: ['Corn', 'Soybeans', 'Wheat'],
    livestock: ['Cows', 'Sheep', 'Chickens']
  }

  return (
    <div className='container mx-auto'>
      <h1 className='mb-4 text-2xl font-bold'>Farmer Profile</h1>
      <div className='p-4 bg-white rounded-lg shadow-lg'>
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
      </div>
    </div>
  )
}

export default FarmerProfile
