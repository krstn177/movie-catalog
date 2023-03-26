import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import Form from 'react-bootstrap/Form';


import { YoutubeEmbed } from './YoutubeEmbed/YoutubeEmbed';
import './MovieDetails.css';

import { movieServiceFactory } from '../../services/movieService';
import { reviewServiceFactory } from '../../services/reviewService';

import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';

export const MovieDetails = () => {
    const { userId, username } = useContext(AuthContext);
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const movieService = useService(movieServiceFactory);
    const [reviews, setReviews] = useState([]);
    const reviewService = useService(reviewServiceFactory);
    const navigate = useNavigate();



    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                setMovie(result);
            });
        reviewService.getAll(movieId)
                .then(result => {
                    setReviews(result);
                });
    }, [movieId]);

    const isOwner = movie._ownerId === userId;

    const onReviewSubmit = async (data) => {
        if (reviews.length > 0) {
            for (const review of reviews) {
                if (review._ownerId == userId) {
                    console.log("Cannot review twice");
                    return;
                }
            }
        }

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        const result = await reviewService.create({
            movieId,
            rating: data.rating,
            description: data.description,
            username: username,
            _ownerId: userId,
            createdDate: today.toLocaleDateString()    
        });

        setReviews(state => [...state, result])
    };

    const { values, changeHandler, onSubmit } = useForm({
        rating: 'Excellent',
        description: '' 
    }, 
    onReviewSubmit);

    const onDeleteClick = async () => {
        await movieService.delete(movie._id);

        // TODO: delete from state       

        navigate('/catalog');
    };

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
                            {isOwner && (
                                <div className='movie-actions'>
                                <Link to={`/catalog/${movie._id}/edit`} className="button">Edit</Link>
                                <button className="button" onClick={onDeleteClick}>Delete</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </article>

            <h1 className="watch-trailer">Watch Trailer</h1>
            <div className='clip-container'>               
                <YoutubeEmbed embedId={movie.TrailerUrl} />
            </div>
                               
            <article className="create-review">
                <label className="addReview">Add a review:</label>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="Rating">
                        <Form.Label className="formLabel">Rating:</Form.Label>
                        <Form.Select name="rating" id="rating" className="bg-dark" style={{textAlign: 'center', color: '#e1b516'}} 
                            value={values.rating} 
                            onChange={changeHandler}
                        >
                            <option value="Excellent">Excellent</option>
                            <option value="Very good">Very good</option>
                            <option value="Good">Good</option>
                            <option value="Average">Average</option>
                            <option value="Mediocre">Mediocre</option>
                            <option value="Bad">Bad</option>
                            <option value="Very Bad">Very Bad</option>
                        </Form.Select>   
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="Description">
                        <Form.Label className="formLabel">Description</Form.Label>
                        <Form.Control name="description" placeholder="......" className="bg-dark" style={{textAlign: 'center', color: '#e1b516'}} as="textarea" rows={4} 
                            value={values.description}
                            onChange={changeHandler}
                        />         
                    </Form.Group>

                    <button className="button" type="submit">
                        Submit
                    </button>
                </Form>
            </article>

            <div className="details-reviews">
                <h2 className="movie-title">Reviews:</h2>
                <ul className="reviews">
                    {reviews && Object.values(reviews).map(x => (
                        <li key={x._id} className="review">
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <span className="review-label">Reviewer: </span> 
                                    <span className="review-content">{x.username}</span>
                                </div>
                                <span className="review-label">{x.createdDate}</span>
                            </div>
                            <div>
                                <span className="review-label">Rating: </span> <span className="review-content">{x.rating}</span> 
                            </div>
                            <span className="review-label">Description: </span> <p className="review-content">{x.description}</p>
                        </li>
                        ))}
                    </ul>

                    {!Object.values(reviews).length && (
                        <p className="movie-title">No reviews yet.</p>
                    )}
            </div>
        </section>
    );
}