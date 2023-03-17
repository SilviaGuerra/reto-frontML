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
        <Route path="/detalle" element={<Detail />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* {user && (
          <>
            <Route path="/table" element={<TableComponent />} />
            <Route path="/new" element={<Crud />} />
            <Route path="/edit/:id" element={<Crud />} />
            <Route path="/simulator" element={<Simulator />} />
          </>
        )} */}
      </Routes>
      {/* <Body /> */}
    </Provider>
  );
}

export default App;
