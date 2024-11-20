import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(() => {
          // setUser();
          setTimeout(() => {
            navigate("/"); // Use navigate for consistency
          }, 1000);
        });
      } else {
        r.json().then((err) => setError(err.error));
      }
    });
  };

  return (
    <div id="login-form-container">
      <form onSubmit={handleSubmit} id="login-form">
        <h1>Log in Page</h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          placeholder="Enter email"
          aria-label="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          placeholder="Enter password"
          aria-label="Password"
        />

        <button type="submit" id="login-login-button">
          Log in
        </button>
        <button
          type="button"
          onClick={() => navigate("/signup")}
          id="signup-button"
        >
          Sign up
        </button>
        <button type="button" onClick={() => navigate("/")}>
          X
        </button>
        {error && <p style={{ color: "red", fontSize: "small" }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
