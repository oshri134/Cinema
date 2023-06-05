import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  buyTicket: any[]; // Adjust the type based on the actual movie object structure
  favorites: any[]; // Adjust the type based on the actual movie object structure
  numTickets: { [movieId: number]: number };
  purchaseHistory: {
    movie: any; // Adjust the type based on the actual movie object structure
    purchaseDate: Date;
  }[];
}
interface SetNumTicketsPayload {
  movieId: number;
  numTickets: number;
}
const initialState: MovieState = {
  buyTicket: [],
  favorites: [],
  numTickets: {},
  purchaseHistory: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<any>) => {
      const movie = action.payload;
      state.favorites.push(movie);
    },
    removeFromFavorites: (state, action: PayloadAction<any>) => {
      const movieId = action.payload;
      state.favorites = state.favorites.filter((movie) => movie.id !== movieId);
    },
    setNumTickets: (state, action: PayloadAction<SetNumTicketsPayload>) => {
      const { movieId, numTickets } = action.payload;
      state.numTickets[movieId] = numTickets;
      state.buyTicket = state.buyTicket.map((movie) => {
        if (movie.id === movieId) {
          return {
            ...movie,
            numTickets: numTickets,
          };
        }
        return movie;
      });
    },
    buyTicket: (state, action: PayloadAction<any>) => {
      const movie = action.payload;
      state.buyTicket.push(movie);
    },
    removeBuyTicket: (state, action: PayloadAction<any>) => {
      const movieId = action.payload;
      state.buyTicket = state.buyTicket.filter((movie) => movie.id !== movieId);
    },
    addToPurchaseHistory: (state, action: PayloadAction<any>) => {
      const { movie, purchaseDate } = action.payload;
      state.purchaseHistory.push({ movie, purchaseDate });
    },
  },
});

export const {
  buyTicket,
  addToFavorites,
  removeFromFavorites,
  setNumTickets,
  removeBuyTicket,
  addToPurchaseHistory,
} = movieSlice.actions;

export default movieSlice.reducer;
