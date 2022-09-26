import React, { useState } from 'react';

import MoviesList from './MoviesList';
import './MoviesPage.css';

function MoviesPage() {
    const [movies, setMovies] = useState([]);

    function fetchMoviesHandler() {
        fetch('https://swapi.dev/api/films/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const transformedMovies = data.results.map((movieData) => {
                    return {
                        id: movieData.episode_id,
                        title: movieData.title,
                        openingText: movieData.opening_crawl,
                        releaseDate: movieData.release_date,
                    };
                });
                setMovies(transformedMovies);
            });
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Click to Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={movies} />
            </section>
        </React.Fragment>
    );
}

export default MoviesPage;