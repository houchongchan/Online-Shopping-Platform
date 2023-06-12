import React from "react";
import { Link } from "react-router-dom";
import Advertisement from "../components/Advertisement";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import shopping from "../img/shopping.mp4";
import fashion from "../img/fashion.mp4";
import livingRoom from "../img/living_room.jpg";
import furniture from "../img/furniture.jpg";
import sofa from "../img/sofa.jpg";

const Main = () => {
	const Links = () => {
		return (
			<div class="main-links">
				<Link to="/products" className="main-display">
					<video src={shopping} autoPlay loop muted type="video/mp4">
						Video by Mixkit -Free Video Assets from Pexels
					</video>
					<div>Shop Here</div>
				</Link>
				<div>
					<img className="home-image" src={livingRoom} alt="room" />
					<img className="home-image" src={furniture} alt="furniture" />
				</div>
			</div>
		);
	};

	return (
		<div className="container-margin">
			<Advertisement />
			<Links />
			<Header text="Top Online Shopping Brand" />
			<Newsletter />
		</div>
	);
};

export default Main;
