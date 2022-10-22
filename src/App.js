import React, { useState } from "react";
import Dashboard from "./screens/Dashboard";
// import LoginForm from './screens/Login';
// import Rules from './screens/Rules';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" component={Dashboard} />
          {/* <Route path="/path contact" element={Login} />
          <Route path="/path about" element={Rules} /> */}
        </Routes>
      </BrowserRouter>
      <Dashboard />
    </>
  );
}
