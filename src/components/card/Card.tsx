import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Card.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { addToFavorites } from "../../redux/movieSlice";
import { useDispatch } from "react-redux";
import { Movie, CardProps } from "../../types/Movie";

const Card: React.FC<CardProps> = ({
  movie,
  handleModal,
  handleFavoriteClick,
  handleBuyTicket,
  handleRemoveBuyTicket,
  isFavorite,
}) => {
  const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  const openModal = () => {
    handleModal(movie);
  };

  return (
    <div
      className="card-movie"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="description-container">
        <p className="movies_cards_overview" onClick={openModal}>
          {movie.overview}
        </p>
        <div className="card-buttons">
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Link to="/OrderTicket">
                <button className="btn" onClick={() => handleBuyTicket(movie)}>
                  <Icon
                    icon="akar-icons:ticket"
                    color="#f87f2e"
                    width="30"
                    height="30"
                  />
                </button>
              </Link>
            </Col>

            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <button
                className="btn"
                onClick={(e) => handleFavoriteClick(e, movie)}
              >
                <Icon
                  icon={isFavorite ? "mdi:heart" : "mdi:heart-outline"}
                  color="#f87f2e"
                  width="30"
                  height="30"
                />
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Card;
