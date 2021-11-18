import React from 'react';
import { Switch, Link, useRouteMatch, Route } from 'react-router-dom';
import AsideBar from './AsideBar/AsideBar';
import DashboardHome from './DashboardHome/DashboardHome';
import AddProduct from './AddProduct/AddProduct';
import GiveReview from './GiveReview/GiveReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
const Dashboard = () => {
	let { path, url } = useRouteMatch();

	return (
		<>
			<div className="d-flex">
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
						<Route path={`${path}/add-product`}>
							<AddProduct></AddProduct>
						</Route>
						<Route path={`${path}/make-admin`}>
							<MakeAdmin></MakeAdmin>
						</Route>
						{/* <AdminRoute path={`${path}/manageOrders`}>
              <ManageOrders></ManageOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute> */}
					</Switch>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
