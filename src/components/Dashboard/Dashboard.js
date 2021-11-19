import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Switch, useRouteMatch, Route, Link } from 'react-router-dom';
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
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	let { path, url } = useRouteMatch();

	return (
		<>
			<div className="p-3 bg-primary d-block d-lg-none w-100">
				<FontAwesomeIcon
					onClick={handleShow}
					className="menubars"
					icon={faBars}
				/>
			</div>
			<div className="d-flex flex-sm-row">
				<AsideBar
					width="25%"
					className="d-none d-lg-block"
					handleClose={handleClose}
				></AsideBar>
				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton={true}>
						<div className="mt-2 fs-2 ms-2 fw-bold ">
							<Link to="/home" className="text-decoration-none">
								<span className="generic-text-color fw-bolder">Markto</span>
							</Link>
						</div>
					</Offcanvas.Header>
					<Offcanvas.Body closeButton={true}>
						<AsideBar width="100%" handleClose={handleClose} s></AsideBar>
					</Offcanvas.Body>
				</Offcanvas>
				{/* Offcanvas  end*/}
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
