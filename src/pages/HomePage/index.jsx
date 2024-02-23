import { Link, useLoaderData } from "react-router-dom";

export const HomePage = () => {
	const beers = useLoaderData();

	return (
		<main>
			<h1>Brews 101 Session</h1>
			<p>
				¡Te damos la bienvenida a la cervecería virtual de Brews&Tech Sessions!
				Prepara tus sentidos para una experiencia única donde exploraremos el
				fascinante mundo de React mientras saboreamos las mejores cervezas del
				planeta.
			</p>
			<ul className="beers-list">
				{beers.map((beer, idx) => {
					return (
						<Link key={idx} to={`/${beer.id}`}>
							<li className="beer-item">
								<div className="beer-el">
									<picture className="beer-el__pic">
										<img
											className="beer-el__img"
											src={beer.image_url}
											alt={beer.name}
										/>
									</picture>
									<div className="beer-el__info-containe">
										<h2 className="beer-el__title">{beer.name}</h2>
										<p className="beer-el__description">{beer.tagline}</p>
									</div>
								</div>
							</li>
						</Link>
					);
				})}
			</ul>
		</main>
	);
};
