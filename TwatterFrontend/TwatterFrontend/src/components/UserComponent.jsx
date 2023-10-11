import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

import axios from 'axios'

import Feed from './FeedComponent'

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
				userInfo.followers		= followers || []
				userInfo.following		= following || []
				userInfo.birthdate		= birthdate || null
				userInfo.aboutMe		= aboutMe || null
				userInfo.posts			= posts || []
			} else {
				userInfo.fullName		= 'User does not exist'
				userInfo.profileImage	=  "default"
				userInfo.followers		= []
				userInfo.following		= []
				userInfo.birthdate		= null
				userInfo.aboutMe		= null
				userInfo.posts			= []
			}

			setUserInfo( userInfo )
			console.log( "requested user and loggedin user:", username, userName )
		} )
	}, [])

	return <>
		{ userInfo.loading ? <h1>Loading profile!</h1> :
			<>
				<div className='user-bio'>
					<img src={userInfo.profileImage} alt="user profile image" className='user-profile-image'/>
					<div className='user-display-name'>{userInfo.fullName}</div>

					<div className='user-handle'>{username}{ userInfo.birthdate ? <> - ({userInfo.birthdate})</> : null }</div>

					<div className='user-aboutme'>{userInfo.aboutMe || ""}</div>

					<div className='user-follows'>Followers: {userInfo.followers.length} Following: {userInfo.following.length}</div>

					{(username === userName) ? null : <button>Follow/Unfollow</button>}
				</div>

				<Feed className='user-feed' tweets={userInfo.posts} />
			</>
		}
	</>
}


