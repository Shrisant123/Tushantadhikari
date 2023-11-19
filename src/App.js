import React from "react";
import Nav from './componentsa/Nav';
// import Hobby from "./componentsa/About/Hobby";
import About from "./componentsa/About";
import Contact from "./componentsa/Contact";
import Blogs from "./componentsa/Blogs";
import Home from "./componentsa/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/"  element={<Home />}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/blogs" element={<Blogs />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;