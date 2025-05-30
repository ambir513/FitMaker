import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import About from "./About";
import Footer from "./Footer";

export default function Body() {
  return (
    <div className="flex flex-col mt-15">
      <Hero />
      <Category />
      <About />
      <Footer />
    </div>
  );
}
