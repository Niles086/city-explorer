import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Movie from './Movie';

export default function RenderMovies({ movies, location }) {
  return (
    <div className="movies">
      {movies.length > 0 && (
        <h2>Movies with {location.display_name} in the name:</h2>
      )}
      <Carousel>
        {movies.map((movie, index) => (
          <Carousel.Item key={index}>
            <Movie
              title={movie.title}
              overview={movie.overview}
              averageVotes={movie.average_votes}
              totalVotes={movie.total_votes}
              popularity={movie.popularity}
              releaseDate={movie.released_on}
              imageUrl={movie.image_url}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
