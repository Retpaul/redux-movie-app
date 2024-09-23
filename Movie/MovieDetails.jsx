import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
} from "../../store/movieslice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="flex justify-evenly py-10 text-white font-normal">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="text-4xl">{data.Title}</div>
            <div className="pl-1 mt-5 text-gray-300 flex">
              <span className="mr-5">IMDB Rating : {data.imdbRating}</span>
              <span> IMDB Votes: {data.imdbVotes}</span>
              <span>Runtime: {data.Runtime}</span>
              <span>Year : {data.Year}</span>
            </div>
            <div className="mt-5 leading-7">{data.Plot}</div>
            <div className="movie-info text-gray-300">
              <div>
                <span className="p-2 text-white font-semibold w-full inline-block">
                  Director
                </span>

                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="ml-7">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
