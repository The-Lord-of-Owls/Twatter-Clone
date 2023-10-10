import React from 'react'
import ReactDOM from 'react-dom/client'

//React Router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

//State management
import { Provider } from 'react-redux'
import store from './redux/store'

//Import our pages
import Home from './components/HomeComponent'
import Login from './components/LoginComponent'
import Register from './components/RegisterComponent'
import UserProfile from './components/UserComponent'

//CSS/SCSS stuff
import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/:userID',
		element: <UserProfile />
	},
	{ 
		path: '/login',
		element: <Login />
	},
	{
		path: '/register',
		element: <Register />
	}
])


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)


