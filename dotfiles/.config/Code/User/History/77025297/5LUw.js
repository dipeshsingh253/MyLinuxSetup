import React from "react";
import { useParams } from "react-router-dom";

const UpdateOrder = () => {
  const { id } = useParams();

  const [order, setOrder] = useState({
    orderId: id,
    orderStatus: "str",
    paymentMethod: "str",
    userId: 0,
  });

  return <div>UpdateOrder</div>;
};

export default UpdateOrder;
