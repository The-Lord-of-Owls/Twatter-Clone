import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

import axios from 'axios'
import '../styles/user.scss'

// mY nAmE mIcAh WrItE uR fUnCtIoNs RiGhT
export default function UserProfile() {
	const { username } = useParams()

	//used to determine if we are viewing our own profile, or another user's
	const user = useSelector( state => state.user )
	const userName = useMemo( () => user.username, [user.username])

	//Default values for component
	const [userInfo, setUserInfo] = useState( {
		loading: true,
		fullName: '',
		followers: [],
		following: [],
		birthdate: '',
		aboutMe: '',
		profileImage: '',
		posts: []
	} )

	useEffect( () => {
		console.log( username )
		axios.get( `http://localhost:3000/user/${ username }` ).then( res => {
			console.log( "user info", res.data )
			let { success } = res.data

			let userInfo = {
				loading: false
			}

			if ( success ) {
				let { fullName, birthdate, aboutMe, profileImage, posts, followers, following } = res.data.user

				userInfo.fullName		= fullName || username
				userInfo.profileImage	= profileImage || "default"
				userInfo.followers		= followers || null
				userInfo.following		= following || null
				userInfo.birthdate		= birthdate || null
				userInfo.aboutMe		= aboutMe || null
				userInfo.posts			= posts || null
			} else {
				userInfo.fullName		= 'User does not exist'
				userInfo.profileImage	=  "default"
				userInfo.followers		= null
				userInfo.following		= null
				userInfo.birthdate		= null
				userInfo.aboutMe		= null
				userInfo.posts			= null
			}

			setUserInfo( userInfo )
			console.log( "requested user and loggedin user:", username, userName )
		} )
	}, [])


	//profile info
		//profile image, username, followers, following, bio
	//Feed
		//tweet
			//user profile, name, like/repost, text, ect

	return <>
		{ userInfo.loading ? <h1>Loading profile!</h1> :
			(username === userName) ? <h1>Viewing our own profile</h1> :
				<h1>Viewing {userInfo.fullName}'s profile!</h1>
		}

		{userInfo.followers}
		{userInfo.following}
		{userInfo.birthdate}
		{userInfo.aboutMe}
		{userInfo.profileImage}
		{userInfo.posts}
	</>
}


