// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './pages/Registration/authSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export default store;


import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import serviceReducer from './pages/Farmer/service.reducer'

const persistConfigService = {
  key: 'service',
  storage
}

// const persistConfigSession = {
//   key: 'session',
//   storage,
// };

const persistedServiceReducer = persistReducer(persistConfigService, serviceReducer)
// const persistedSessionReducer = persistReducer(persistConfigSession, sessionReducer);

export const store = configureStore({
  reducer: {
    service: persistedServiceReducer
    // session: persistedSessionReducer,
  }
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
