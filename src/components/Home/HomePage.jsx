import React from "react";

import Slideimage from "./Slideimage";
import NewsCard from "./NewsCard";
import Layout from "../Layout/Layout";



const HomePage = () => {
  return (

    <Layout>

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

    </Layout>
  );
};

export default HomePage;
