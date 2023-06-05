import React, { useEffect, useState } from "react";
import "./Home.css";
import MovieCarousel from "../../components/movieCarousel/MovieCarousel";
import { Icon } from "@iconify/react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Card from "../../components/card/Card";
import MovieDetails from "../../components/movieDetails/MovieDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavorites,
  addToFavorites,
  buyTicket,
  removeBuyTicket,
} from "../../redux/movieSlice";
import { Movie } from "../../types/Movie";
import { RootState } from "../../redux/store/configureStore";

const Home = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
  
  console.log(apiKey);
  const favorites = useSelector((state: RootState) => state.movie.favorites);
  console.log(favorites);

  const moviesWithFavorite = movies.map((movie) => ({
    ...movie,
    isFavorite: favorites.some((fav: Movie) => fav.id === movie.id),
  }));

  const handleFavoriteClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    movie: any
  ) => {
    event.stopPropagation(); // Prevent event bubbling
    if (movie.isFavorite) {
      dispatch(removeFromFavorites(movie.id)); // Dispatch the removeFromFavorites action with the movie ID
    } else {
      dispatch(addToFavorites(movie)); // Dispatch the addToFavorites action with the movie data
    }
  };

  const handleBuyTicket = (movie: Movie) => {
    dispatch(buyTicket(movie));
  };

  const handleRemoveBuyTicket = (movieId: string) => {
    dispatch(removeBuyTicket(movieId));
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=2023`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
          const movies = data.results;
          setMovies(movies);
        } else {
          console.log("Error:", data.status_message);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleModal = (movie: any) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      <section className="movies_carousel">
        <MovieCarousel
          movies={moviesWithFavorite}
          handleFavoriteClick={handleFavoriteClick}
          isFavorite={moviesWithFavorite.some((movie) => movie.isFavorite)}
        />
      </section>
      <section className="nowplaying">
        <div className="text-center">
          <div className="nowplaying_header">
            <h1>Now Playing</h1>
          </div>
          <div>
            <Row>
              {moviesWithFavorite.map((movie, index) => (
                <Col xxl={4} xl={4} lg={4} md={4} sm={6} key={index}>
                  <Card
                    movie={movie}
                    handleModal={handleModal}
                    handleFavoriteClick={handleFavoriteClick}
                    handleBuyTicket={handleBuyTicket}
                    handleRemoveBuyTicket={handleRemoveBuyTicket}
                    isFavorite={movie.isFavorite} // Pass movie.isFavorite instead of isFavorite
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          {selectedMovie && <MovieDetails movie={selectedMovie} />}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
