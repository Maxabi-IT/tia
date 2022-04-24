import React from "react";
import Order from "../components/Order";

const LandingPage = () => {
  const login = (username, password) => {};

  return (
    <div>
      LandingPage <button onClick={() => login("rashed", "12344")}>Login</button>
      <Order total={15} />
    </div>
  );
};

export default LandingPage;
