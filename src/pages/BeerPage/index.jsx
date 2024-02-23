export const BeerPage = () => {
	return (
		<main>
			<header className="beer-header">
				<picture className="beer-header__pic">
					<img className="beer-header__img" />
				</picture>
				<div className="beer-header__title-container">
					<h1 className="beer-header__title"></h1>
					<p className="beer-header__description"></p>
					<ul className="beer-header__list">
						<li>
							<strong>ABV:</strong>
						</li>
						<li>
							<strong>IBU:</strong>
						</li>
						<li>
							<strong>First Brewed:</strong>
						</li>
					</ul>
				</div>
			</header>
			<section className="beer-detailed">
				<h2 className="beer-detailed__title">Description</h2>
				<p></p>
			</section>
			<section className="beer-detailed">
				<h2 className="beer-detailed__title">Food Pairing</h2>
				<div className="beer-detailed__list"></div>
			</section>
			<section className="beer-detailed">
				<h2 className="beer-detailed__title">Brewers Tips</h2>
				<p></p>
			</section>
		</main>
	);
};
