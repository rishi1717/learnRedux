import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { createStore } from "redux"
import allReducers from "./reducers"
import { Provider } from "react-redux"
import ShowCount from "./showCount"

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<ShowCount />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
