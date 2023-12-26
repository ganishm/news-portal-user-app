import React from "react";
import Navbar from "../Layout/Navbar";
import Slideimage from "./Slideimage";
import NewsCard from "./NewsCard";
import Footer from "../Layout/Footer";


const HomePage = () => {
  return (
   <>
    <div className="container ">
      <Navbar/>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Slideimage />
        </div>   </div>
        <div className="row justify-content-center">
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
