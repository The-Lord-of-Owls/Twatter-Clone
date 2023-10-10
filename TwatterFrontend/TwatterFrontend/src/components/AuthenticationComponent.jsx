import React, { useState, useEffect } from 'react'

// Simulate authentication status
const isAuthenticated = true

const withAuthentication = (WrappedComponent) => {
	return function WithAuthentication(props) {
		const [user, setUser] = useState(null)

		useEffect(() => {
			// Simulate an auth check
			setUser(isAuthenticated ? { username: 'test' } : null)
		}, [])

		return <>
			{user ? (
				// Render the wrapped component with user data
				<WrappedComponent user={user} {...props} />
			) : (
				// You can render a loading spinner or an authentication prompt here
				<p>Loading...</p>
			)}
		</>
	}
}

export default withAuthentication