import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

const forceUpdate = () => {
	if (window.location.pathname === "/random") location.reload();
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<nav>
			<ul>
				<li>
					<span className="material-symbols-outlined">home</span>
				</li>
				<li>
					<span className="material-symbols-outlined">shuffle</span>
				</li>
			</ul>
		</nav>
		<App />
	</React.StrictMode>
);
