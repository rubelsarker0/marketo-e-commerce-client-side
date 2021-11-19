import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './AsideBar.css';
const AsideBar = ({ width, className, handleClose }) => {
	const { databaseUser, logOut } = useAuth();
	let { path, url } = useRouteMatch();

	return (
		<div
			style={{ width: `${width}` }}
			className={`vh-100 bg-white dashboard-aside ${className} position-relative`}
		>
			<ul className="aside-bar-menu p-0  mt-3">
				<li>
					<NavLink
						onClick={handleClose}
						className="d-flex align-items-center"
						activeClassName="aside-item-active"
						exact
						to={`/home`}
					>
						Home
					</NavLink>
				</li>
				{!databaseUser?.role && (
					<>
						<li>
							<NavLink
								onClick={handleClose}
								className="d-flex align-items-center"
								activeClassName="aside-item-active"
								exact
								to={`${url}`}
							>
								Dashboard
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={handleClose}
								className="d-flex align-items-center"
								activeClassName="aside-item-active"
								exact
								to={`${url}/giveReview`}
							>
								Give Review
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={handleClose}
								className="d-flex align-items-center"
								activeClassName="aside-item-active"
								exact
								to={`${url}/myOrders`}
							>
								My Orders
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={handleClose}
								className="d-flex align-items-center"
								activeClassName="aside-item-active"
								exact
								to={`${url}/payment`}
							>
								Payment
							</NavLink>
						</li>
					</>
				)}
				{databaseUser?.role === 'admin' && (
					<>
						<li>
							<NavLink
								onClick={handleClose}
								className="d-flex align-items-center"
								activeClassName="aside-item-active"
								exact
								to={`${url}/manage-orders`}
							>
								Manage Orders
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={handleClose}
								className="d-flex align-items-center"
								activeClassName="aside-item-active"
								exact
								to={`${url}/add-product`}
							>
								Add Product
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={handleClose}
								className="d-flex align-items-center"
								activeClassName="aside-item-active"
								exact
								to={`${url}/make-admin`}
							>
								Make Admin
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={handleClose}
								className="d-flex align-items-center"
								activeClassName="aside-item-active"
								exact
								to={`${url}/manage-products`}
							>
								Manage Products
							</NavLink>
						</li>
					</>
				)}
				<li>
					<button
						style={{ bottom: '200px' }}
						className="w-80 btn generic-btn-color text-white border-0 position-absolute d-flex align-items-center dashboard-logout mb-3 ms-3 fw-bold fs-5"
						onClick={logOut}
					>
						LOG OUT
					</button>
				</li>
			</ul>
		</div>
	);
};

export default AsideBar;
