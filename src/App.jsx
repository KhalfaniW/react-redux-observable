import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./components/Counter/Counter";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Observable Demo</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
