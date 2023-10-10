import React, { useState } from 'react'

const Login = ({ onLogin }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	// todo more type checking.
	const handleLogin = (e) => {
		e.preventDefault()

		if (!username || !password)
			return

		onLogin(username)
	}

	//use style with this later
	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<div>
					<label>
						Username:
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Password:
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login