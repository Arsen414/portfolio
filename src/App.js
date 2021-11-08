import React from "react";
import { Header } from "./components/Header/Header";
import "./App.css";
import { Intro } from "./components/Intro/Intro";
import { TechList } from "./components/TechList/TechList";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection/PortfolioSection";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <TechList />
      <AboutSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}

export default App;
