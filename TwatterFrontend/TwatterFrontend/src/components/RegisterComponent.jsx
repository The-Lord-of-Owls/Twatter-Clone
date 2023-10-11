import React, { useState } from 'react'
import axios from 'axios'
import '../styles/register.scss'

export default function Register() {
	const [fullname, setFullname] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function handleRegister( e ) {
		e.preventDefault()

		if ( !fullname || !username || !email || !password)
			return

		axios.post('http://localhost:3000/register', { fullName: fullname, username: username, email: email, password: password } ).then( res => {
			console.log( res )
		} )
	}


	return <>
		<h2>Register</h2>
		<form onSubmit={handleRegister}>
			<div>
				<label>
					Full Name:
					<input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} minLength="8" maxLength="64" />
				</label>
			</div>
			<div>
				<label>
					Username:
					<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} minLength="4" maxLength="32" />
				</label>
			</div>
			<div>
				<label>
					Email:
					<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} minLength="5" maxLength="64" />
				</label>
			</div>
			<div>
				<label>
					Password:
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="8" maxLength="32" />
				</label>
			</div>
			<button type="submit">Register</button>
		</form>
	</>
}


