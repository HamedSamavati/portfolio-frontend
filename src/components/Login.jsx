import { useState, useEffect } from "react";
import { loginUser } from "../services/api";

function Login({ setIsLoginOpen, setIsLoggedIn, setUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setIsLoginOpen(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, setIsLoginOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await loginUser({
        email: formData.email.trim(),
        password: formData.password.trim(),
      });

      if (response.token) {
        setUser(response.user);
        setIsLoggedIn(true);
        setSuccessMessage("Login successful!");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(
        error.response?.data?.message || error.message || "Login failed"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {error && <div className="error-message">{error}</div>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
