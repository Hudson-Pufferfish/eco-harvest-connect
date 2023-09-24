import { configureStore } from '@reduxjs/toolkit'
import serviceReducer from './pages/Farmer/service.reducer'

export const store = configureStore({
  reducer: { service: serviceReducer },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
