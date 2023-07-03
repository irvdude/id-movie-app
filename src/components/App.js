import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import NavBar from "./NavBar";
import About from "./About";
import MovieDetail from "./MovieDetail";
import '../index.css';


function App() {
  return (
    <>
      <NavBar />
      <Routes className="text-center">
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
