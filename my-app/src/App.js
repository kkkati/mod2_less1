import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

const dateNow = new Date(); //декларативный
const yearNow = dateNow.getFullYear();
function App() {
	return createElement(
		"div",
		{ className: "App" },
		createElement(
			"header",
			{ className: "App-header" },
			createElement("img", {
				src: `${logo}`,
				className: "App-logo",
				alt: "logo",
			}),
			createElement(
				"p",
				null,
				"Edit ",
				createElement("code", { children: `src/App.js` }),
				" and save to reload."
			),
			createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			),
			createElement("p", { children: `${yearNow}` })
		)
	);
}

export default App; //везде декларативнй код
