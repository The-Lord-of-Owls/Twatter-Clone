import React from 'react'
import { useParams } from 'react-router'

import '../styles/user.scss'

// mY nAmE mIcAh WrItE uR fUnCtIoNs RiGhT
export default function UserProfile({ user }) {
	const { userID } = useParams()

	return <>
		<h1>Welcome, {user.username}!</h1>
	</>
}


