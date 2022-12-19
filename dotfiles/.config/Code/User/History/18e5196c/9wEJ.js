import React, { useEffect, useState } from "react";
import OrderService from "../services/OrderService";

const OrderDetail = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await OrderService.getOrderByUser(0);
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
        <li class="text-gray-800 font-semibold">First item in the list</li>
        <li class="text-gray-800 font-semibold">Second item in the list</li>
        <li class="text-gray-800 font-semibold">Third item in the list</li>
      </ul>
    </>
  );
};

export default OrderDetail;
