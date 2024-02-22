import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Link } from "react-router-dom";
import "./index.scss";

const forceUpdate = () => {
	if (window.location.pathname === "/random") location.reload();
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<Link to="/">
							<span className="material-symbols-outlined">home</span>
						</Link>
					</li>
					<li>
						<Link to="/random" onClick={forceUpdate}>
							<span className="material-symbols-outlined">shuffle</span>
						</Link>
					</li>
				</ul>
			</nav>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
