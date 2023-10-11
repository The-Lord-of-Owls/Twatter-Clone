import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const withAuthentication = (WrappedComponent) => {
	return function WithAuthentication(props) {
		const user = useSelector( state => state.user )
		const userLoggedIn = useMemo( () => user.loggedIn, [user.loggedIn])
		const navigate = useNavigate()

		return <>
			{userLoggedIn ? (
				// Render the wrapped component with user data
				<WrappedComponent {...props} />
			) : navigate( '/login' ) } 
		</>
	}
}

export default withAuthentication