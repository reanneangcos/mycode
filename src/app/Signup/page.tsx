"use client";
import "./SignupPage.css";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";


export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
  
    return (
    <div className="signup-page">
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

      
        
         
        <div className="signup-container">
          

          

          <div className="signup-forms">
          <h1>Signup</h1>
            <form >
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
              <input
                type="mobile"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
                <input
                type="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <button type="submit">Signup</button>
            </form>

            <div className="signup-link">
              <p>
                Already have an account? <a href="/Login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    
   
  );
};


