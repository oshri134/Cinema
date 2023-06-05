import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MovieDetails.css";

interface Movie {
  backdrop_path: string;
  title: string;
  release_date: string;
  poster_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
}

interface MovieDetailsProps {
  movie: Movie;
}
const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  console.log(movie);
  const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <div className="movie-details">
      <div className="card">
        <Row>
          <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
            <div className="card_left">
              <img src={backgroundImageUrl} alt="Movie Poster" />
            </div>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
            <div className="card_right">
              <h1>{movie.original_title}</h1>
              <div className="card_right__details">
                <div className="card_right__details__info">
                  <ul>
                    <li>{movie.release_date}</li>
                  </ul>
                </div>
                <div className="card_right__details__review">
                  <p>{movie.overview}</p>
                  <a
                    href="http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl"
                    target="_blank"
                  ></a>
                </div>
              </div>
              <div className="card_right__rating">
                <div className="card_right__rating__stars">
                  <fieldset className="rating">
                    {/* Rating inputs and labels */}
                  </fieldset>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MovieDetails;
