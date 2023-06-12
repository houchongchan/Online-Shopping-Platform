import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { fillerText } from "../config";

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
			<p className="container-margin">{fillerText}</p>
		</div>
	);
};

export default About;
