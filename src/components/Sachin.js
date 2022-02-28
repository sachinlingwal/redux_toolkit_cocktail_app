import React from "react";
import { useParams } from "react-router-dom";

const Sachin = () => {
  const { id } = useParams();
  return <div>my id is {id}</div>;
};

export default Sachin;
