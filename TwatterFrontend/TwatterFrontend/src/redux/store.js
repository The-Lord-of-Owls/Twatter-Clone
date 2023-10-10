import { configureStore } from '@reduxjs/toolkit'

//Import Slices
import userSlice from './userSlice'

const store = configureStore( {
	reducer: {
		user: userSlice
	}
} )

export default store


