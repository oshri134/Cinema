import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./OrderTicket.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store/configureStore";
import { useNavigate } from "react-router-dom";
import {
  setNumTickets,
  addToPurchaseHistory,
  removeBuyTicket,
} from "../../redux/movieSlice";
import { Movie } from "../../types/Movie";


const OrderTicket: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tickets = useSelector((state: RootState) => {
    return state.movie.buyTicket.map((ticket) => {
      return {
        ...ticket,
        numTickets: state.movie.numTickets[ticket.id] || 1, // Use default value of 1 if numTickets is not defined
      };
    });
  });

  const numTickets = useSelector((state: RootState) => state.movie.numTickets);
  console.log(numTickets);

  const [showThankYou, setShowThankYou] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrderClick = () => {
    setShowThankYou(true);
    setOrderPlaced(true);

    tickets.forEach((movie) => {
      dispatch(
        addToPurchaseHistory({
          movie,
          purchaseDate: new Date().toISOString(), // Convert to string
        })
      );
      dispatch(removeBuyTicket(movie.id));
    });

    setTimeout(() => {
      navigate("/");
    }, 10000);
  };
  const handleNumTicketsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    movieId: number
  ) => {
    const newNumTickets = parseInt(e.target.value);
    dispatch(setNumTickets({ movieId, numTickets: newNumTickets }));
  };
  return (
    <div className="OrderTicket">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1>Order Ticket</h1>
          </Col>
        </Row>
        <Row>
          <Row className="movies_order_ticket_container">
            {orderPlaced ? null : (
              <>
                {tickets.length === 0 ? (
                  <div className="empty-basket-message">
                    The basket is empty
                  </div>
                ) : (
                  tickets.map((movie) => (
                    <div key={movie.id} className="movie_order_ticket">
                      <Col xxl={3} xl={2} lg={6} md={12} sm={12} xs={12}>
                        <img
                          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                          alt={movie.title}
                        />
                      </Col>
                      <Col
                        xxl={6}
                        xl={10}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        style={{
                          marginLeft: "29px",
                        }}
                      >
                        <h3>{movie.title}</h3>
                        <p>Description: {movie.overview}</p>
                        <p>
                          Release Year:{" "}
                          {new Date(movie.release_date).getFullYear()}
                        </p>
                        {movie.trailer && <p>Trailer: {movie.trailer}</p>}
                        <p>
                          Number of Tickets:
                          <input
                            type="number"
                            min="1"
                            value={movie.numTickets}
                            onChange={(e) =>
                              handleNumTicketsChange(e, movie.id)
                            }
                          />
                        </p>
                      </Col>
                    </div>
                  ))
                )}
                <hr />
              </>
            )}
          </Row>
          {!orderPlaced && tickets.length > 0 && (
            <div className="order-button-container">
              <button className="order-button" onClick={handleOrderClick}>
                Order
              </button>
            </div>
          )}
          {showThankYou && (
            <p>
              Thank you for ordering the tickets.
              <br /> Please do not exit the browser
            </p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default OrderTicket;
