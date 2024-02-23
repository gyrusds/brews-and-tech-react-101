import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">
							<span className="material-symbols-outlined">home</span>
						</Link>
					</li>
					<li>
						{window.location.pathname === "/random" ? (
							<button
								to="/random"
								onClick={() => {
									window.location.reload();
								}}
							>
								<span className="material-symbols-outlined">shuffle</span>
							</button>
						) : (
							<Link to="/random">
								<span className="material-symbols-outlined">shuffle</span>
							</Link>
						)}
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};
