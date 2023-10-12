import { createSlice } from '@reduxjs/toolkit'
import storageSession from 'redux-persist/lib/storage/session'

export const userPersistConfig = {
	key: 'user',					//key for this slice
	storage: storageSession,		//Storage engine to use
	blacklist: ['loggedIn']			//What we don't want stored in session storage
}

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		loggedIn: false,	//User needs to be reauthed every time the redux state is initialized
		username: '',		//these end up being persisted from session storage
		fullName: '',
	},
	reducers: {
		setUserInfo: (state, action) => {
			if (action.payload.loggedIn) {
				console.log("user is now logged in")
				state.loggedIn = action.payload.loggedIn
				state.username = action.payload.username
				state.fullName = action.payload.fullName
			} else {
				console.log("User is now logged out")
				state.loggedIn = false
				state.username = ""
				state.fullName = ""
			}
		}
	}
})

export const { setUserInfo } = userSlice.actions
export default userSlice.reducer


