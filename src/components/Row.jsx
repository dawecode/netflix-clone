import React, { useState, useEffect } from "react";
import axios from "../axios/instance";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  console.log("movie", movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            key={movie.id}
            src={base_url + movie?.backdrop_path}
            alt={movie?.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
