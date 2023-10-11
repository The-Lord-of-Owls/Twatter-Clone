import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import '../styles/home.scss'

export default function Home() {
	const user = useSelector( state => state.user )
	const userFullName = useMemo( () => user.fullName, [user.fullName])

	// Navbar
	// feed
		// tweets

	return <>
		<h1>Welcome, {userFullName}!</h1>
		<p>This is the home page for authenticated users.</p>
	</>
}


