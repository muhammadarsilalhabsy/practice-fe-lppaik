import React from "react";
import { Hero, Post, Collaboration, About, Footer } from "../components";
const Home = () => {
  return (
    <main>
      <Hero />
      <Collaboration />
      <Post />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
