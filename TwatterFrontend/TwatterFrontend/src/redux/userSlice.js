import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {},
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


