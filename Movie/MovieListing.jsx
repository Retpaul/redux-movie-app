import React from "react";
import { useSelector } from "react-redux";
import { getAllShows, getMovies } from "../../store/movieslice";
import MovieCard from './MovieCard'


const MovieListing = () => {
  const movies = useSelector(getMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,renderShows = "";
    

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="py-5 ">
        <h2 className="text-gray-400 mb-3 font-normal">Movies</h2>
        <div className="grid grid-cols-5 gap-[15px]">{renderMovies}</div>
      </div>
      <div className="py-5">
        <h2 className="text-gray-400 mb-3 font-normal">Shows</h2>
        <div className="grid grid-cols-5 gap-[15px]">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;