import React, { useEffect, useState } from "react";
import OrderService from "../services/OrderService";
import Navbar from "./Navbar";
import Order from "./Order";

const OrderDetail = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await OrderService.getOrderByUser(0);
        setOrders(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <ul class="display: flex; list-style-type: none;">
        {!loading && orders.map((order) => <Order />)}
      </ul>
    </>
  );
};

export default OrderDetail;
