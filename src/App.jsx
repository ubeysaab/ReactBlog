import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./context/DataContext";
// - Rotues
import Views from "./Routes/Views";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <DataProvider>
          <Views />
        </DataProvider>
      </BrowserRouter>
    </section>
  );
}

export default App;
