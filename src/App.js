import React, { useState } from "react";
import Dashboard from "./screens/Dashboard";
import Rules from "./screens/Rules";
import TourManagement from "./screens/TourManagement";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import LoginForm from "./screens/Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Tours" element={<TourManagement />} />
          <Route path="/Rules" element={<Rules />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
