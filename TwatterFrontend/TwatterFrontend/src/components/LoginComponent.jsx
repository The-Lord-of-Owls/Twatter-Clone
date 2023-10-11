import React, { useState } from 'react'
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { setUserInfo } from '../redux/userSlice'

import { useNavigate } from 'react-router-dom'

import '../styles/login.scss'

export default function Login() {
	const [email, setemail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()
	const navigate = useNavigate()

	// todo more type checking.
	const handleLogin = (e) => {
		e.preventDefault()

		if (!email || !password)
			return

		axios.post( 'http://localhost:3000/login', { email: email, password: password } ).then( res => {
			let { success, error } = res.data

			if ( success ) {
				let userInfo = res.data.user
				console.log( userInfo )

				//store in token and state management
				dispatch( setUserInfo({
					loggedIn: success,
					username: userInfo.username,
					fullName: userInfo.fullName
				}) )

				navigate( '/' )
			} else {
				switch ( error ) {
					//Error codes
					case 100:
						console.error( "Login info mismatch or user does not exist!" )

						break
				}
			}
		} )
	}

	//use style with this later
	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<div>
					<label>
						Email:
						<input type="text" value={email} onChange={(e) => setemail(e.target.value)} minLength="5" maxLength="32" />
					</label>
				</div>
				<div>
					<label>
						Password:
						<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="8" maxLength="32" />
					</label>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	)
}


