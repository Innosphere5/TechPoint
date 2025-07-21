
import React from "react";
import Home from "./home/Home";
import Features from "./features/page";
import About from "./about/page"
import Contact from "./contact/page"

const Page = () => {
  return (
    <main>
      <Home />
      <Features />
      <About />
      <Contact />
    </main>
  );
};

export default Page;
