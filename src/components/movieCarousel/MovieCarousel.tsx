import React, { useState } from "react";
import "./MovieCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import { Icon } from "@iconify/react";
import { Col, Container, Row } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { Movie,MovieCarouselProps } from "../../types/Movie";



const MovieCarousel: React.FC<MovieCarouselProps> = ({
  movies,
  handleFavoriteClick,
  isFavorite,
}) => {
  return (
    <Carousel interval={5000} className="carousel">
      {movies.slice(0, 3).map((movie, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 h-10 carousel-img"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          
            />
            <Carousel.Caption>
              <Row></Row>
              <h3 className="movies_carousel_header">{movie.original_title}</h3>
              <div className="circle-chart-main"></div>
              <p className="movies_carousel_overview">{movie.overview}</p>

              <div className="carousel-buttons">
                <Container>
                  <Row>
                    {/* <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <div className="btn-container">
                        <Link to="/OrderTicket">
                          <button className="btn">
                            <Icon
                              icon="akar-icons:ticket"
                              color="#f87f2e"
                              width="30"
                              height="30"
                            />
                            <span>Buy a Ticket</span>
                          </button>
                        </Link>
                      </div>
                    </Col> */}
                    {/* <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <div className="btn-container">
                        <button
                          className="btn"
                          onClick={(e) => handleFavoriteClick(e, movie)}
                        >
                          <Icon
                            icon={
                              isFavorite ? "mdi:heart" : "mdi:heart-outline"
                            }
                            color="#f87f2e"
                            width="30"
                            height="30"
                          />
                          <span>Add to Favorites</span>
                        </button>
                      </div>
                    </Col> */}
                  </Row>
                </Container>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default MovieCarousel;
