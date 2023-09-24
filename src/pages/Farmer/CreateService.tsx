import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Service, addService, cancelEditingService, finishEditingService } from '~/pages/Farmer/service.reducer'
import { RootState } from '~/store'

const initialServiceState: Service = {
  id: '',
  title: '',
  description: '',
  price: 0,
  location: ''
}

const CreateService: React.FC = () => {
  const [formData, setFormData] = useState(initialServiceState)
  const editingService = useSelector((state: RootState) => state.service.editingService)

  const dispatch = useDispatch()

  useEffect(() => {
    setFormData(editingService || initialServiceState)
  }, [editingService])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (editingService) {
      dispatch(finishEditingService(formData))
    } else {
      const formDataWithId = { ...formData }
      dispatch(addService(formDataWithId))
    }

    setFormData(initialServiceState)
  }

  const handleCancelEditingService = () => {
    dispatch(cancelEditingService())
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    // Update the formData property corresponding to the input field's name
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        name === 'location'
          ? value
              .replace(/[^a-zA-Z]/g, '')
              .toLowerCase()
              .replace(/^\w/, (c) => c.toUpperCase())
          : name === 'price'
          ? value.replace(/^0+(?!$|\.)/, '')
          : value,
    }))
  }

  const handleChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target

    // Update the formData property corresponding to the textarea field's name
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit} onReset={handleCancelEditingService} className='form'>
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
            onChange={handleChangeTextarea}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price' className='form-label'>
            Price
          </label>
          <input
            type='number'
            id='price'
            name='price'
            className='form-input'
            placeholder='Price'
            required
            value={formData.price}
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
        {editingService && (
          <Fragment>
            <button
              type='submit'
              className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800'
            >
              <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                Update Service
              </span>
            </button>
            <button
              type='reset'
              className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'
            >
              <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                Cancel
              </span>
            </button>
          </Fragment>
        )}
        {!editingService && (
          <div className='button'>
            <button type='submit' className='btn-create-service'>
              Add Service
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

export default CreateService
