import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
	const { user, loading } = useAuth();
	if (loading) {
		return (
			<div className="text-center mx-auto py-5">
				<Spinner animation="border" variant="danger" />
			</div>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/account/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export const AuthenticationPrivateRoute = ({ children, ...rest }) => {
	const { user } = useAuth();
	return (
		<Route
			{...rest}
			render={({ location }) =>
				!user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/home',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
