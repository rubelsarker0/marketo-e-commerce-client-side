import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import AsideBar from './AsideBar/AsideBar';
import DashboardHome from './DashboardHome/DashboardHome';
import AddProduct from './AddProduct/AddProduct';
import GiveReview from './GiveReview/GiveReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import AdminRoute from './AdminRoute/AdminRoute';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
const Dashboard = () => {
	let { path, url } = useRouteMatch();

	return (
		<>
			<div className="d-flex flex-sm-row">
				<AsideBar width="25%"></AsideBar>

				<div className="w-100">
					<Switch>
						<Route exact path={path}>
							<DashboardHome></DashboardHome>
						</Route>
						<Route path={`${path}/myOrders`}>
							<MyOrders></MyOrders>
						</Route>
						<Route path={`${path}/payment`}>
							<Payment></Payment>
						</Route>
						<Route path={`${path}/giveReview`}>
							<GiveReview></GiveReview>
						</Route>
						<AdminRoute path={`${path}/add-product`}>
							<AddProduct></AddProduct>
						</AdminRoute>
						<AdminRoute path={`${path}/make-admin`}>
							<MakeAdmin></MakeAdmin>
						</AdminRoute>
						<AdminRoute path={`${path}/manage-orders`}>
							<ManageOrders></ManageOrders>
						</AdminRoute>
						<AdminRoute path={`${path}/manage-products`}>
							<ManageProducts></ManageProducts>
						</AdminRoute>
					</Switch>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
