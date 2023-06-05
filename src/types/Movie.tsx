export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  backdrop_path: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  voteAverage: number;
  poster_path: string;
}
export interface CardProps {
  movie: Movie;
  handleModal: (movie: Movie) => void;
  handleFavoriteClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    movie: Movie
  ) => void;
  handleBuyTicket: (movie: Movie) => void; // Update the parameter type here
  handleRemoveBuyTicket: (movieId: string) => void; // Adjust the parameter type if needed
  isFavorite: boolean;
}

export interface MovieCarouselProps {
  movies: Movie[];
  handleFavoriteClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    movie: Movie
  ) => void;
  isFavorite: boolean;
}
