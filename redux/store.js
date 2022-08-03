import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, PERSIST } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, authSlice)

export const store = configureStore({
  reducer: {
    auth : persistedReducer
  },
})

export const persistor = persistStore(store)