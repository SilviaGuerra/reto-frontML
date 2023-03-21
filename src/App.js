import { store } from "./store";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Detail from "./components/Detail";
import "./App.css";

function App() {
  return (
    <Provider className="App" store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/items" element={<Body />} />
        <Route path="/items/:id" element={<Detail />} />
      </Routes>
    </Provider>
  );
}

export default App;
