import React from 'react'
import ReactDOM from 'react-dom/client'

//React Router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

//State management
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store'

//Import our pages
import Home from './components/HomeComponent'
import Login from './components/LoginComponent'
import Register from './components/RegisterComponent'
import UserProfile from './components/UserComponent'

//CSS/SCSS stuff
import './styles/main.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/:username',
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
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	</React.StrictMode>
)


