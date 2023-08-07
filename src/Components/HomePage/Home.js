import React from "react";
import Footer from "../NavBar/footer";
import NavBar from "../NavBar/NavBar";
import Countries from "./Countries/Countries";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Countries />
      <Footer />
    </div>
  );
}

export default Home;
