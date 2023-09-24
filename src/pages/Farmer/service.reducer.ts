import { createReducer, createAction, PayloadAction, nanoid } from '@reduxjs/toolkit'

// Define the type for your state

export type Service = {
  id: string
  title: string
  description?: string
  price: number
  location?: string
}

type ServicesState = {
  serviceList: Service[]
}

export const addService = createAction('service/addService', function (service: Omit<Service, 'id'>) {
  return {
    payload: {
      ...service,
      id: nanoid()
    }
  }
})

export const removeService = createAction<string>('service/removeService')

const initialServicesState: ServicesState = {
  serviceList: []
}

const serviceReducer = createReducer(initialServicesState, (builder) => {
  builder
    .addCase(addService, (state, action: PayloadAction<Service>) => {
      if (action.payload.price < 0) {
        alert('Your price must not be negative')
        return state
      }

      const newService = action.payload

      // Use the spread operator to create a new array with the new service added to the end
      state.serviceList.push(newService)

      console.log('New State after ADD:', state) // Log the updated state
    })

    .addCase(removeService, (state, action: PayloadAction<string>) => {
      state.serviceList = state.serviceList.filter((service) => service.id !== action.payload)
    })
    .addDefaultCase((state, action) => {
      console.log('Unhandled action:', action.type)
      return state
    })
})

export default serviceReducer
