import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { ReactComponent as Logo } from "../svgs/logo.svg";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const About = () => {
	const { productState } = useGlobalContext();
	const [randomImage, setRandomImage] = useState(
		localStorage.getItem("randomImage")
	);
	const location = useLocation();

	async function productImage(x) {
		try {
			const productLength = await x.products.length;
			const randomNumber = Math.floor(Math.random() * productLength);
			const randomImage = await x.products[randomNumber];

			if (randomImage) {
				setRandomImage(randomImage.image);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		productImage(productState);
		localStorage.setItem("randomImage", randomImage);
	}, [location]);

	return (
		<div className="container-margin">
			<Header text="Our Company" />
			<img src={randomImage} />
			<Header text="Our Story" />
			<p className="container-margin">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
				accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
				delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
				Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt
				sequi blanditiis est exercitationem molestiae delectus saepe odio
				eligendi modi porro eaque in libero minus unde sapiente consectetur
				architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum
				totam velit saepe sed quos similique amet. Ex, voluptate accusamus
				nesciunt totam vitae esse iste.
			</p>
		</div>
	);
};

export default About;
