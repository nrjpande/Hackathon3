import React from "react";
import "../CSS/popular.css";

export function Popular() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9e7f04546142a12519bef95d2287a803"
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
      });
  }, []);

  return (
    <>
      <h2 className="top-heading-p"> What's Hot </h2>
      <div className="container">
        {data.map((movie) => (
          <div key={movie.id} className="movie-item-p">
            <div className="movie-poster-p">
              <img
                src={"https://image.tmdb.org/t/p/w780" + movie.poster_path}
                alt={movie.title}
              />
            </div>
            <div className="movie-info-p">
              <div className="movie-rating-p">{movie.vote_average}</div>
              <h3>{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
