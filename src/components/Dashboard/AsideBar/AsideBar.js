import React from 'react';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';
import './AsideBar.css';
const AsideBar = ({ width }) => {
	let { path, url } = useRouteMatch();

	return (
		<div
			style={{ width: `${width}` }}
			className={`vh-100 bg-white dashboard-aside`}
		>
			<ul className="aside-bar-menu p-0  mt-3">
				<li>
					<NavLink
						className="d-flex align-items-center"
						activeClassName="aside-item-active"
						exact
						to={`/home`}
					>
						Home
					</NavLink>
				</li>
				{/* {!databaseUser?.role && (
          <> */}
				<li>
					<NavLink
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
						className="d-flex align-items-center"
						activeClassName="aside-item-active"
						exact
						to={`${url}/makeReview`}
					>
						Make Review
					</NavLink>
				</li>
				<li>
					<NavLink
						className="d-flex align-items-center"
						activeClassName="aside-item-active"
						exact
						to={`${url}/myOrders`}
					>
						My Orders
					</NavLink>
				</li>

				{/* </>
        )} */}
				{/* {databaseUser?.role === "admin" && (
          <> */}
				<li>
					<NavLink
						className="d-flex align-items-center"
						activeClassName="aside-item-active"
						exact
						to={`${url}/manageOrders`}
					>
						Manage Orders
					</NavLink>
				</li>
				<li>
					<NavLink
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
						className="d-flex align-items-center"
						activeClassName="aside-item-active"
						exact
						to={`${url}/manageProducts`}
					>
						Manage Products
					</NavLink>
				</li>

				{/* </>
        )} */}
			</ul>
		</div>
	);
};

export default AsideBar;
