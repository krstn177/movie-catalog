import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { YoutubeEmbed } from './YoutubeEmbed/YoutubeEmbed';
import './MovieDetails.css';

import { movieServiceFactory } from '../../services/movieService';
import { useService } from '../../hooks/useService';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const movieService = useService(movieServiceFactory)


    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                setMovie(result);
            })
    }, [movieId]);

    return (
        <section className="movie-details bg-dark text-white">
            <h1 className="movie-title">{movie.title}</h1>
            <article className="movie-info">
                <div className="image-container">
                    <img src={movie.ImageUrl} alt="MovieImage" />
                </div>
                <div className="movie-info-container">
                    <div className='subcontainer'>
                        <div>
                            <h2 className='second-movie-title'>{movie.title}</h2>
                            <h3 className='movie-subTitle'>{movie.subTitle}</h3>
                        </div>
                        <div className="movie-other-container">
                            <span>Description:</span>
                            <p className='movie-other'>{movie.Description}</p>
                            <span>Director:</span>
                            <p className='movie-other'>{movie.Director}</p>
                            <span>Genre:</span>
                            <p className='movie-other'>{movie.Genre}</p>
                            <span>Cast:</span>
                            <p className='movie-other'>{movie.Cast}</p>
                            <span>Duration:</span>
                            <p className='movie-other'>{movie.Duration}</p>
                            <span>Year</span>
                            <p className='movie-other'>{movie.Year}</p>
                        </div>
                    </div>
                </div>
            </article>
            <h1 className="watch-trailer">Watch Trailer</h1>
            <div className='clip-container'>               
                <YoutubeEmbed embedId={movie.TrailerUrl} />
            </div>
        </section>
    );
}