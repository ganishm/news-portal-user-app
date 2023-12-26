import React from "react";
import PriceCard from "./Subscription/PriceCard";
import { package_details } from "./Subscription/package_details";
import "./Subscription/subcription.css";
import Header from "./Subscription/Header";

const SubscriptionPage = () => {
  
  return (
    <section className="main py-5 ">
    <div className="container">
      <Header/>
      <div className="row justify-content-center align-items-center my-3">
        {package_details.map((item) => {
          return <PriceCard details={item} />;
        })}
      </div>
    </div>
    </section>
  );
};

export default SubscriptionPage;
