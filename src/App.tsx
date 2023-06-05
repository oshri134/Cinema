import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "./components/navbar/CustomNavbar";
import OrderTicket from "./pages/orderTicket/OrderTicket";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/configureStore";
import User from "./pages/user/User";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route
            path="/OrderTicket"
            caseSensitive={false}
            element={<OrderTicket />}
          />
          <Route path="/user" caseSensitive={false} element={<User />} />
        </Routes>
      </Router>
    <Footer/>
    </>
  );
}

export default App;
