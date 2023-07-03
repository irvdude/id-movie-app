import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

  const url = `https://imdb-top-100-movies1.p.rapidapi.com/?id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "47c87649d8msh5964d8423d9fed5p1f3fd5jsn74ff8a11a226",
      "X-RapidAPI-Host": "imdb-top-100-movies1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [url]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetail;
