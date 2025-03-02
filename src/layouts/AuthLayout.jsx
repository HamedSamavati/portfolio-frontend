import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AuthLayout() {
  const LoginHandler = () => {
    console.log("Login");
  };
  return (
    <div>
      <Header />
      <div>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={LoginHandler}>Login</button>
      </div>
      <Footer />
    </div>
  );
}

export default AuthLayout;
