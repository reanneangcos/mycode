"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import "./LoginPage.css";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Example: Only proceed if email is "test@example.com"
    if (email === "test@example.com" && password === "1234") {
      router.push("/home"); // redirect to /home
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="navbar">
        <div className="nav-links">
          <div className="left-nav-links">
            <img
              src="/company-logo.png"
              alt="Ursal Rice Milling Services Logo"
              className="company-logo"
            />
            <a href="/about">Ursal Rice Milling Services</a>
          </div>
          <div className="center-nav-links">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="login-container">
          <h1>Login</h1>

          <div className="user-icon">
            <img
              src="/userlogo.svg"
              alt="User Icon"
              className="user-icon-image"
            />
          </div>

          <div className="login-forms">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>

            <div className="signup-link">
              <p>
                Don't have an account? <a href="/Signup">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


