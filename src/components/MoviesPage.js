import React, { useState } from 'react';

import MoviesList from './MoviesList';
import './MoviesPage.css';

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    async function fetchMoviesHandler() {
      setIsLoading(true);
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
  
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    }
    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Click to Fetch Movies</button>
            </section>
            <section>
                {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
                {!isLoading && movies.length === 0 && <p class="noMovies">Found no movies click above to fetch.</p>}
                {isLoading && <p class="loading">Loading...</p>}
            </section>
        </React.Fragment>
    );
}

export default MoviesPage;
