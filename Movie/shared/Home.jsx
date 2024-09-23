import React, { useEffect } from "react";
import MovieDetails from "../Movie/MovieDetails";
import { useDispatch } from "react-redux";

import { fetchAsyncMovies, fetchAsyncShows } from "../../src/store/movieslice";
import MovieListing from "../Movie/MovieListing";

export default function Home() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
}
