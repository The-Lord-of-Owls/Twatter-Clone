import React from 'react'
import withAuthentication from './AuthenticationComponent'

import '../styles/home.scss'

const Home = ({ user }) => {
	return <>
		<h1>Welcome, {user.username}!</h1>
		<p>This is the home page for authenticated users.</p>
	</>
}

export default withAuthentication(Home)