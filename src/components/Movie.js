import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { useParams } from "react-router-dom";
import '../index.css';

function Movie() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const url = 'https://imdb-top-100-movies1.p.rapidapi.com/';

  const options = {
    method: 'GET',
    url: url,
    params: { id: id },
    headers: {
      'X-RapidAPI-Key': '47c87649d8msh5964d8423d9fed5p1f3fd5jsn74ff8a11a226',
      'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <MovieItem movie={movie} />
    </div>
  );
}

export default Movie;
