import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./CustomNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/configureStore";

const CustomNavbar: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.movie.favorites);
  const favoritesCount = favorites.length;
  const location = useLocation();
  const isOnPage = location.pathname === "/OrderTicket";

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/">Home</Link>
          </Nav>
          <Nav className="icons">
            <Nav.Link eventKey={2} href="#memes">
              <Link to="/OrderTicket">
                <Button
                  style={{ backgroundColor: "#f87f2e" }}
                  disabled={location.pathname === "/OrderTicket"}
                >
                  Buy a Ticket
                </Button>
              </Link>
            </Nav.Link>

            <Nav.Link eventKey={2} disabled={location.pathname === "/User"}>
              <Link to="/User">
                {" "}
                <Icon
                  icon="ri:user-fill"
                  color="#f87f2e"
                  width="40"
                  height="40"
                />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
