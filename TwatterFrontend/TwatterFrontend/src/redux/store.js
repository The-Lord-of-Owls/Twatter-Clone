import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

//Import Slices
import userSlice, { userPersistConfig } from './userSlice'

export const store = configureStore({
	reducer: combineReducers({
		user: persistReducer( userPersistConfig, userSlice),
	}),
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk]
})

export const persistor = persistStore(store)


