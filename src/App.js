import Header from "./components/Header";
import Body from "./components/Body";
import { store } from "./store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <Provider className="App" store={store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
