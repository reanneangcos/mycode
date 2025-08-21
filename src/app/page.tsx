"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import "./HomePage.css";

export default function HomePage() {


  return(
    <div className="home-page">
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
        <div className="right-nav-links">
          <a href="/Login">Login</a>
          <a href="/Signup">Signup</a>
          
        </div>
      </div>
    </div>
    </div>

  );
};