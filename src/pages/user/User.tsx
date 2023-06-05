import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./User.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/configureStore";
import { buyTicket, removeFromFavorites } from "../../redux/movieSlice";
import { Movie } from "../../types/Movie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const User: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const history = useSelector(
    (state: RootState) => state.movie.purchaseHistory
  );
  const handleBuyTicket = (movie: Movie) => {};

  const fivorites = useSelector((state: RootState) => state.movie.favorites);
  useEffect(() => {
    history.forEach((movie) => {
      console.log(movie.movie.title);
      console.log(movie.purchaseDate);
    });
    console.log(history.length);
  });
  const handleRemoveFavorite = (movieId: string) => {
    // Dispatch the remove action
    dispatch(removeFromFavorites(movieId));
  };
  const handlePurchaseTicket = (movie: Movie) => {
    dispatch(buyTicket(movie));
    navigate("/OrderTicket");
  };

  return (
    <div className="user">
      <Container>
        <div className="user-info">
          <h1 className="section-heading">Movie Ticket Purchase </h1>
          <table className="history-table">
            <thead>
              <tr>
                <th>Movie</th>
                <th>Date of Purchase</th>
              </tr>
            </thead>
            <tbody>
              {history.map((movie) => {
                return (
                  <tr key={movie?.movie?.id}>
                    <td>{movie?.movie?.title}</td>
                    <td>{new Date(movie?.purchaseDate).toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <h1 className="section-heading">Favorite Movie </h1>
          <table className="history-table">
            <thead>
              <tr>
                <th>Movie</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fivorites.map((movie) => {
                return (
                  <tr key={movie?.id}>
                    <td>{movie?.title}</td>
                    <td>
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveFavorite(movie.id)}
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => handlePurchaseTicket(movie)}
                        className="purchase-button"
                      >
                        Purchase Ticket
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default User;
