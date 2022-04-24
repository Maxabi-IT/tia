import React from "react";

const Order = ({ products, total }) => {
  return <div className="bg-dark p-5 m-5 text-white rounded">{total}</div>;
};

export default Order;
