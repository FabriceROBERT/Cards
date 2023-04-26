import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <div>
      {/* Composant */}
      <Logo></Logo>
      <Navigation />
      <Countries />
    </div>
  );
};

export default Home;
