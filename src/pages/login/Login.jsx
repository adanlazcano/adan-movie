import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return <button onClick={(_) => navigate("/")}>login</button>;
};

export default Login;
