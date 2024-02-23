import { useLoaderData } from "react-router-dom";

export const BeerPage = () => {
	const beer = useLoaderData();

	return (
		beer && (
			<main>
				<header className="beer-header">
					<picture className="beer-header__pic">
						<img
							className="beer-header__img"
							src={beer.image_url}
							alt={beer.name}
						/>
					</picture>
					<div className="beer-header__title-container">
						<h1 className="beer-header__title">{beer.name}</h1>
						<p className="beer-header__description">{beer.tagline}</p>
						<ul className="beer-header__list">
							{beer.abv && (
								<li>
									<strong>ABV:</strong> {beer.abv}%
								</li>
							)}
							{beer.ibu && (
								<li>
									<strong>IBU:</strong> {beer.ibu}
								</li>
							)}
							{beer.first_brewed && (
								<li>
									<strong>First Brewed:</strong> {beer.first_brewed}
								</li>
							)}
						</ul>
					</div>
				</header>
				{beer.description && (
					<section className="beer-detailed">
						<h2 className="beer-detailed__title">Description</h2>
						<p>{beer.description}</p>
					</section>
				)}
				{beer.food_pairing?.length && (
					<section className="beer-detailed">
						<h2 className="beer-detailed__title">Food Pairing</h2>
						<div className="beer-detailed__list">
							{beer.food_pairing.map((food, idx) => {
								return <p key={idx}>- {food}</p>;
							})}
						</div>
					</section>
				)}
				{beer.brewers_tips && (
					<section className="beer-detailed">
						<h2 className="beer-detailed__title">Brewers Tips</h2>
						<p>{beer.brewers_tips}</p>
					</section>
				)}
			</main>
		)
	);
};
