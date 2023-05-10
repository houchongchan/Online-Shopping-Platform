import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/usercontext";
import { ReactComponent as Logo } from "../svgs/logo.svg";
import { useFilterContext } from "../context/filter_context";

const Navbar = () => {
	const location = useLocation();
	const { currentUser, loginWithRedirect, logout } = useUserContext();

	const { updateFilters } = useFilterContext();
	const navigate = useNavigate();

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			navigate("../products", { replace: true });
		}
	};

	return (
		<div className="navbar-container">
			<div className="link-container">
				<Link
					to="/"
					className="navbar-button"
					style={{
						marginLeft: "2rem",
						marginTop: "1rem",
						textDecoration: "none",
					}}
				>
					<Logo />
				</Link>
				<Link
					to="/about"
					className={location.pathname == "/about" ? "active" : "navbar-button"}
				>
					ABOUT
				</Link>
				<Link
					to="/products"
					className={
						location.pathname == "/products" ? "active" : "navbar-button"
					}
				>
					PRODUCTS
				</Link>
			</div>
			<div className="login-container">
				<input
					type="text"
					className="search-bar"
					name="text"
					placeholder="Search"
					onChange={(e) => {
						updateFilters(e);
					}}
					onKeyDown={handleKeyDown}
				/>

				{currentUser ? (
					<button
						className="navbar-button"
						onClick={() => {
							localStorage.removeItem("user");
							logout({ returnTo: window.location.origin });
						}}
					>
						LOGOUT
					</button>
				) : (
					<button className="navbar-button" onClick={loginWithRedirect}>
						LOGIN
					</button>
				)}
				<Link
					to="/cart"
					className={location.pathname == "/cart" ? "active" : "navbar-button"}
				>
					CART
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
