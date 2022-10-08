import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import OnePost from "./components/one-post/OnePost.js";
import Home from "./components/home/Home.js";
import NavBar from "./components/nav-bar/nav-bar.js";
import Footer from "./components/footer/footer.js";
import Archives from "./components/archives/archives.js";
import About from "./components/about/about.js";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Archives />} path="/archives" exact />
        <Route element={<OnePost />} path="/:slug" />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}
export default App;
