import React, { useCallback, useEffect, useState } from "react";
import PriceCard from "./Subscription/PriceCard";
// import { package_details } from "./Subscription/package_details";
import "./Subscription/subcription.css";
import Header from "./Subscription/Header";
import axios from "axios";
import { config } from "../config";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";

const SubscriptionPage = () => {
  const [Razorpay] = useRazorpay();
  const [allSub, setAllSub] = useState([]);
  const [order, setOrder] = useState({});
  const navigate = useNavigate();
  const allSubscription = async () => {
    try {
      const allSubData = await axios.get(
        `${config.api}/payment/all-subscription`
      );
      console.log(allSubData.data);
      setAllSub(allSubData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    allSubscription();
  }, []);

  const handlePayment = useCallback(() => {
    const rzp1 = new Razorpay({ ...order, key: "rzp_test_hifkGHp2SrGBU3" });
    rzp1.open();
  }, [Razorpay]);

  useEffect(() => {
    if (order.amount) {
      handlePayment();
    }
  }, [order]);

  const createOrder = async (details) => {
    try {
      const order = await axios.get(
        `${config.api}/payment/create-order?sub_id=${details._id}`
      );
      let orderValue = order.data;
      let handler = (res) => {
        navigate("/");
      };
      const rzp1 = new Razorpay({
        ...orderValue,
        key: "rzp_test_hifkGHp2SrGBU3",
        handler,
      });
      rzp1.open();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="main py-5 ">
      <div className="container">
        <Header />
        <div className="row justify-content-center align-items-center my-3">
          {allSub.map((item) => {
            return <PriceCard details={item} createOrder={createOrder} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPage;
