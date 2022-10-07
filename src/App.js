import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./components/all-posts/AllPosts.js";
import OnePost from "./components/one-post/OnePost.js";
import Home from "./components/home/Home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AllPosts />} path="/archive" exact />
        <Route element={<OnePost />} path="/:slug" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
