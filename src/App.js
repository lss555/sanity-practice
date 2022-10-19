import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import OnePost from "./components/one-post/OnePost.js";
import Home from "./components/home/Home.js";
import NavBar from "./components/nav-bar/nav-bar.js";
import Footer from "./components/footer/footer.js";
import SideBar from "./components/side-bar/side-bar.js";
import Archives from "./components/archives/archives.js";
import About from "./components/about/about.js";

function App() {
const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
    console.log('toggled', isOpen)
  };

  return (
    <HashRouter>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Archives />} path="/archives" exact />
        <Route element={<OnePost />} path="/:slug" />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
export default App;
