import React, { useState, useContext } from 'react'
import { ServicesContext, ActionTypes } from '~/context/ServicesProvider'

const initialServiceState = {
  id: '',
  title: '',
  description: '',
  price: 0,
  location: '',
}

const CreateService: React.FC = () => {
  const servicesContext = useContext(ServicesContext)

  if (!servicesContext) {
    // Render a loading indicator or message
    return <div className='text-center'>Loading...</div>
  }

  const { dispatch } = servicesContext
  const [formData, setFormData] = useState(initialServiceState)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Dispatch an action to add a service here using the formData
    dispatch({ type: ActionTypes.ADD, payload: formData })
    setFormData(initialServiceState)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    // Update the formData property corresponding to the input field's name
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit} className='form'>
        <h2 className='card-title'>Add Your Service</h2>
        <div className='form-group'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            className='form-input'
            placeholder='Title'
            required
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <textarea
            id='description'
            name='description'
            className='form-textarea'
            placeholder='Description'
            required
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price' className='form-label'>
            Price
          </label>
          <input
            type='text'
            id='price'
            name='price'
            className='form-input'
            placeholder='Price'
            required
            value={formData.price.toString()}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='location' className='form-label'>
            Location
          </label>
          <input
            type='text'
            id='location'
            name='location'
            className='form-input'
            placeholder='Location'
            required
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        {/* Add similar form fields for other properties of your Service type */}
        <div>
          <button type='submit' className='btn-create-service'>
            Create Service
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateService
