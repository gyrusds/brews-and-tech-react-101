import { Link } from "react-router-dom";

export const HomePage = () => {
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
				<Link>
					<li className="beer-item">
						<div className="beer-el">
							<picture className="beer-el__pic">
								<img className="beer-el__img" />
							</picture>
							<div className="beer-el__info-containe">
								<h2 className="beer-el__title"></h2>
								<p className="beer-el__description"></p>
							</div>
						</div>
					</li>
				</Link>
			</ul>
		</main>
	);
};
