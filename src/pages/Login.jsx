import React from "react";

function Login() {
  const LoginHandler = () => {
    console.log("Login");
  };
  return (
    <div>
      <p>login</p>
      <div>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={LoginHandler}>Login</button>
      </div>
    </div>
  );
}

export default Login;
