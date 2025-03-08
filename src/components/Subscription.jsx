import React, { useState } from "react";
import "../styles/Subscription.scss";
function Subscription() {
  const [email, setEmail] = useState("");
  const handleSubscribe = () => {
    if (email.trim() !== "") {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail("");
    }
    console.log(email);
  };
  return (
    <div className="subscription-container">
      <h3>Subscribe to our newsletter</h3>
      <p>
        Get premium insights into cutting-edge web development, UI/UX trends,
        and my latest projects.
      </p>
      <form>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Stay Updated</button>
      </form>
    </div>
  );
}

export default Subscription;
