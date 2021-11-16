import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import './App.css';
import Footer from './components/Shared/Footer/Footer';
import Navigation from './components/Shared/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute, {
	AuthenticationPrivateRoute,
} from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import BrowseProducts from './components/BrowseProducts/BrowseProducts';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Navigation></Navigation>
				<Switch>
					<Route exact path="/">
						<Redirect to="/home" />
					</Route>
					<Route path="/home" exact>
						<Home></Home>
					</Route>
					<Route path="/browse-products">
						<BrowseProducts></BrowseProducts>
					</Route>
					<PrivateRoute path="/dashboard">
						<Dashboard></Dashboard>
					</PrivateRoute>
					<AuthenticationPrivateRoute path="/account/login">
						<Login></Login>
					</AuthenticationPrivateRoute>
					<AuthenticationPrivateRoute path="/account/register">
						<Register></Register>
					</AuthenticationPrivateRoute>
					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</AuthProvider>
	);
}

export default App;
