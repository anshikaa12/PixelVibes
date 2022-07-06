import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Suggestionbox from "../../components/suggestionbox";
import MainHome from "./mainHome";

function Home() {
  return (
    <div className="homepage">
      <Nav />
      <div className="main-sect flex-row">
        <Sidebar />
        <MainHome />
        <Suggestionbox />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
