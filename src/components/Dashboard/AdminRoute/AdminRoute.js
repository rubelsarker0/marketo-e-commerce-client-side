import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
const AdminRoute = ({ children, ...rest }) => {
	const { databaseUser, loading } = useAuth();
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
				databaseUser?.role ? (
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

export default AdminRoute;
