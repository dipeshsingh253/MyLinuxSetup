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
    {!loading && <></>}
      </ul>
    </>
  );
};

export default OrderDetail;
