import React from "react";
import Navbar from "../Layout/Navbar";
import Slideimage from "./Slideimage";
import NewsCard from "./NewsCard";
import Footer from "../Layout/Footer";


const HomePage = () => {
  return (
   <>
    <div className="container-fluid ">
      <Navbar/>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <Slideimage />
        </div>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <Footer/>
    </div></>
  );
};

export default HomePage;
