import { useFilterContext } from "../context/filter_context";
import { Link } from "react-router-dom";

const Advertisement = () => {
	const { filterState } = useFilterContext();
	const { filtered_products } = filterState;

	if (filtered_products.length < 1) {
		return <h2>Sorry no products matched your search</h2>;
	}
	return (
		<div className="carousel-container">
			<div>
				{filtered_products.map((product, index) => {
					console.log(product);
					return (
						<Link
							className="carousel-thumbnails"
							key={index}
							to={`./${product.id}`}
						>
							<img key={index} src={product.image} />
							<h1> {product.name}</h1>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Advertisement;
