import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AllPosts from "./components/all-posts/AllPosts.js";
import OnePost from "./components/one-post/OnePost.js";
import Home from "./components/home/Home.js";
import NavBar from "./components/nav-bar/nav-bar.js";
import Archives from "./components/archives/archives.js";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Archives />} path="/archives" exact />
        <Route element={<OnePost />} path="/:slug" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
