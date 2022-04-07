import { useSelector, useDispatch } from "react-redux"
import {increment, decrement, signIn} from './actions'

function App() {
	const count = useSelector((state) => state.counter)
	const isLogged = useSelector((state) => state.isLogged)
  const dispatch = useDispatch()
	return (
		<div>
			{isLogged ? <div>Hello There!</div> : null}
			<div className="App">Count : {count}</div>
			<button onClick={()=>dispatch(increment())}>Add</button>
			<button onClick={()=>dispatch(decrement())}>Subtract</button>
      <button onClick={()=>dispatch(signIn())}>Sign in</button>
		</div>
	)
}

export default App
