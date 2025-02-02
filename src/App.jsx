import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import { DataProvider } from "./context/DataContext"; instead of this we'll use StoreProvider from EasyPeasy Redux 
import { StoreProvider } from "easy-peasy";
import store from "./store"
// - Rotues
import Views from "./Routes/Views";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <StoreProvider store={store}>
          <Views />
        </StoreProvider>
      </BrowserRouter>
    </section>
  );
}

export default App;
