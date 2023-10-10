import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		setUserInfo: (state, action) => {
			if (action.payload.loggedIn) {
				state.loggedIn = action.payload.loggedIn;
				state.username = action.payload.username
				state.handle = action.payload.handle
			} else {
				state.loggedIn = false
				state.username = ""
				state.handle = ""
			}
		}
	}
})


export const { setLoggedIn } = userSlice.actions
export default userSlice.reducer


