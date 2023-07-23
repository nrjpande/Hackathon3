import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/newReleases.css";

export function NewReleases() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=9e7f04546142a12519bef95d2287a803"
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
      });
  }, []);

  const settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
  };

  return (
    <div className="container-nr">
      <h2 className="top-heading-nr"> New Releases </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((movie) => (
            <div key={movie.id} className="movie-item-nr">
              <div className="movie-image-nr">
                <img
                  src={"https://image.tmdb.org/t/p/w780" + movie.backdrop_path}
                  alt={movie.title}
                />
              </div>
              <div className="movie-details-nr">
                <div className="movie-poster-nr">
                  <img
                    src={"https://image.tmdb.org/t/p/w780" + movie.poster_path}
                    alt={movie.title}
                  />
                </div>
                <div className="movie-info-nr">
                  <h3>{movie.title}</h3>
                  <div className="movie-rating-nr">{movie.vote_average}</div>
                  <p className="movie-overview-nr">{movie.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
