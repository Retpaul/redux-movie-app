import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div className="bg-slate-700 cursor-pointer transition-all duration-300 hover:transform hover:transition-all hover:duration-300">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="h-[300px] ">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="p-5">
            <div className="text-gray-300">
              <h4 className="text-xl font-normal mb-3">{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
