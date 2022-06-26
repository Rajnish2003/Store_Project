import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Store/Home";
import Addproduct from "./Components/Addproduct";
import Stores from "./Components/Store/Stores";
import About from "./Components/About";
import StoreDetail from "./Components/Store/StoreDetail"

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<Addproduct />} exact />
          <Route path="/stores" element={<Stores />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/stores/:id" element={<StoreDetail/>} exact/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
