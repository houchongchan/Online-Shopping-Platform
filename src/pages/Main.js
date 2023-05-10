import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import shopping from "../img/shopping.mp4";
import fashion from "../img/fashion.mp4";
import livingRoom from "../img/living_room.jpg";
import furniture from "../img/furniture.jpg";
import sofa from "../img/sofa.jpg";

const Main = () => {
	const Slogan = () => {
		return (
			<div class="home">
				<div class="home-grid">
					<div className="hero">
						<video src={shopping} autoPlay loop muted type="video/mp4">
							Video by Mixkit -Free Video Assets from Pexels
						</video>
						<Link to="/products">
							<button className="btn-shopping">Shop Here</button>
						</Link>
					</div>
					<div className="home-image">
						<img className="home-image" src={livingRoom} alt="room" />
					</div>
					<div className="home-image">
						<img className="home-image" src={furniture} alt="furniture" />
					</div>
					<div className="hero">
						<video src={fashion} autoPlay loop muted type="video/mp4">
							Video by Mixkit -Free Video Assets from Pexels
						</video>
						<Link to="/products">
							<button className="btn-shopping">Buy Clothes</button>
						</Link>
					</div>
				</div>
				<div class=" absolute">
					<img className="home-image2" src={sofa} alt="sofa" />
				</div>
			</div>
		);
	};

	return (
		<div className="container-margin">
			<Header text="Top Online Shopping Brand" />
			<div className="slogan">
				<Slogan />
				<About />
				<Newsletter />
			</div>
		</div>
	);
};

export default Main;
